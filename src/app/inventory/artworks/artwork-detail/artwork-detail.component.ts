import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {ArtworkDetailUsecaseEnum} from '../artwork-detail-usecase-enum.model';
import {SmileysService} from '../../../_common/smileys.service';
import {ArtworkService} from '../artwork.service';
import {Artwork} from '../../../_model/artwork';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.scss']
})
export class ArtworkDetailComponent implements OnInit {

  detailUsecase: typeof ArtworkDetailUsecaseEnum = ArtworkDetailUsecaseEnum;
  usecase = ArtworkDetailUsecaseEnum.viewOnly;
  artwork: {[index: string]:any} = {} as Artwork;
  artworkId: string | null = null;
  artworkForm!: FormGroup;
  artFormOptions = Object.values(Artwork.ArtFormEnum);
  statusOptions = Object.values(Artwork.StatusEnum);

  constructor(private smileysService: SmileysService,
              private artworkService: ArtworkService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {
    console.log(smileysService.getSmiley() + ' from ArtworkDetailComponent constructor');

    this.usecase = this.router.getCurrentNavigation()?.extras.state?.artworkDetailUsecase;
    this.artworkId = this.route.snapshot.paramMap.get('artworkId');

    console.log('usecase: ' + this.usecase);
  }

  ngOnInit(): void {
    if (this.artworkId) {
      this.artwork = this.artworkService.getArtworkById(this.artworkId);
    }

    this.initForm();
  }

  onEdit(): void {
    console.log(this.smileysService.getSmiley());
    console.log('Going to edit the artwork: ' + this.artwork);
    this.usecase = this.detailUsecase.adminUpdate;

    // this.initForm();

    // this.artworkForm.get('title')?.enable();
    // this.artworkForm.get('artForm')?.enable();
    // this.artworkForm.get('description')?.enable();
    // this.artworkForm.get('storageLocation')?.enable();
    // this.artworkForm.get('artist')?.enable();
    // this.artworkForm.get('producer')?.enable();
    // this.artworkForm.get('productSerialNumber')?.enable();
    // this.artworkForm.get('dateObtained')?.enable();
    // this.artworkForm.get('marketValue')?.enable();
    // this.artworkForm.get('status')?.enable();
    // this.artworkForm.get('comment')?.enable();
    // this.artworkForm.get('nextAvailableDate')?.enable();

    for (const field in this.artworkForm.controls) { // 'field' is a string
      console.log(field);

      this.artworkForm.get(field)?.enable();
    }

    // if (this.artworkForm.get('imageUrls')) {
    //   this.getImageUrlCtrls().forEach((imageUrlCtrl, index) => {
    //     imageUrlCtrl.enable();
    //   });
    // }

    // this.artworkForm.get('')?.enable();
    // this.artworkForm.get('')?.enable();

    // this.router.navigate(['artworks', this.artwork.id], {
    //   state: { artworkDetailUsecase: this.detailUsecase.adminUpdate }
    // });

    console.log(this.usecase);
    // location.reload();
  }

  onAddImageUrl(): void {
    this.getImageUrlCtrls().push(new FormControl());
  }

  onDeleteImageUrl(i: number): void {
    this.getImageUrlCtrls().splice(i, 1);
  }

  onCancel(): void {
    if (this.usecase === this.detailUsecase.adminUpdate) {
      this.usecase = this.detailUsecase.adminRead;

      // this.initForm();

      for (const field in this.artworkForm.controls) { // 'field' is a string
        if (field !== 'imageUrls') {
          this.artworkForm.get(field)?.setValue(this.artwork[field]);
          this.artworkForm.get(field)?.disable();
        }
      }

      this.getImageUrlCtrls().length = 0;
      const imageUrlFa = this.getImageUrlFormArray();
      imageUrlFa.clear();
      this.artwork.imageUrls.forEach((url: string) => {
        console.log(url);
        imageUrlFa.push(new FormControl({url, disabled: true}));
      });

      // console.log('is status disabled? ' + this.artworkForm.get('status')?.disabled);

    } else if (this.usecase === this.detailUsecase.adminCreate) {
      // this.router.navigate(['../'], {relativeTo: this.route});
      this.location.back();
    }
  }

  onReset(): void {

  }

  onSubmit(): void {
    console.log(this.smileysService.getSmiley() +  ' ArtworkDetailComponent.onSubmit() is called' );
    if (this.usecase === this.detailUsecase.adminUpdate) {

    } else if (this.usecase === this.detailUsecase.adminCreate) {

    }
   // this.onCancel();
  }

  getImageUrlCtrls(): FormControl[] {
    return (this.artworkForm.get('imageUrls') as FormArray).controls as FormControl[];
  }

  private getImageUrlFormArray(): FormArray {
    return this.artworkForm.get('imageUrls') as FormArray;
  }

  private initForm(): void {
    // prefix 'f' means 'form field';
    // step 1, initialize all fields with empty strings:
    // let id = '';
    let ffTitle = '';
    let ffArtForm = Artwork.ArtFormEnum.Painting;
    let ffDescription: string | undefined = '';
    let ffStorageLocation = '';
    let ffArtist: string | undefined = '';
    let ffProducer: string | undefined = '';
    let ffProductSerialNumber: string | undefined = '';
    const ffImageUrls = new FormArray([]);
    let ffDateObtained: Date = new Date(1970, 1, 1);
    let ffMarketValue: number | undefined;
    let ffStatus = Artwork.StatusEnum.Available;
    let ffNextAvailableDate = new Date();
    let ffComment: string | undefined = '';

    // in case of admin editing an existing artwork record,
    // assign the current artwork property values to the form fields.
    if (this.artworkId) {
      ffTitle = this.artwork.title;
      ffArtForm = this.artwork.artForm;
      ffDescription = this.artwork.description;
      ffStorageLocation = this.artwork.storageLocation;
      ffArtist = this.artwork.artist;
      ffProducer = this.artwork.producer;
      ffProductSerialNumber = this.artwork.productSerialNumber;
      if (this.artwork.imageUrls) {
        // ffImageUrls = this.artwork.imageUrls;
        for (const imageUrl of this.artwork.imageUrls) {
          ffImageUrls.push(new FormControl({value: imageUrl, disabled: this.readOnly()}));
        }

        console.log('editing of image 0 url disabled? ' + ffImageUrls.at(0).disabled);
      }
      if (this.artwork.dateObtained) {
        ffDateObtained = new Date(this.artwork.dateObtained);
      }
      ffMarketValue = this.artwork.marketValue;
      ffStatus = this.artwork.status;
      ffNextAvailableDate = new Date(this.artwork.nextAvailableDate);
      ffComment = this.artwork.comment;
    }

    this.artworkForm = new FormGroup({
      title: new FormControl({value: ffTitle, disabled: this.readOnly()},
        Validators.required),
      artForm: new FormControl({value: ffArtForm, disabled: this.readOnly()},
        Validators.required),
      description: new FormControl({value: ffDescription, disabled: this.readOnly()}),
      storageLocation: new FormControl({value: ffStorageLocation, disabled: this.readOnly()},
        Validators.required),
      artist: new FormControl({value: ffArtist, disabled: this.readOnly()}),
      producer: new FormControl({value: ffProducer, disabled: this.readOnly()}),
      productSerialNumber: new FormControl({value: ffProductSerialNumber, disabled: this.readOnly()}),
      dateObtained: new FormControl({value: ffDateObtained, disabled: this.readOnly()}),
      marketValue: new FormControl({value: ffMarketValue, disabled: this.readOnly()}),
      status: new FormControl({value: ffStatus, disabled: this.readOnly()},
        Validators.required),
      nextAvailableDate: new FormControl({value: ffNextAvailableDate, disabled: this.readOnly()}),
      imageUrls: ffImageUrls,
      comment: new FormControl({value: ffComment, disabled: this.readOnly()})
    });
  }

  private readOnly(): boolean {
    return this.usecase === this.detailUsecase.adminRead
      || this.usecase === this.detailUsecase.userRead;
  }

  editable(): boolean {
    return this.usecase === this.detailUsecase.adminUpdate
      || this.usecase === this.detailUsecase.adminCreate;
  }

  isEditing(): boolean {
    return this.usecase === this.detailUsecase.adminUpdate
      || this.usecase === this.detailUsecase.adminCreate;
  }
}
