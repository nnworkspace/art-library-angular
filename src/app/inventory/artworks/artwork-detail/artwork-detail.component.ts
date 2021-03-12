import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {ArtworkDetailUsecaseEnum} from '../artwork-detail-usecase-enum.model';
import {SmileysService} from '../../../_common/smileys.service';
// import {ArtworkService} from '../artwork.service';
import {Artwork, ArtworkService, NewArtwork} from '../../../_gen/inventory';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.scss']
})
export class ArtworkDetailComponent implements OnInit {

  detailUsecase: typeof ArtworkDetailUsecaseEnum = ArtworkDetailUsecaseEnum;
  usecase = ArtworkDetailUsecaseEnum.viewOnly;
  artwork: {[index: string]: any} = {} as Artwork;
  artworkId: string | null = null;
  artworkForm!: FormGroup;

  artFormOptions = Object.values(Artwork.ArtFormEnum);
  statusOptions = Object.values(Artwork.StatusEnum);

  lendingColumns: string[] = ['userId', 'lendingStatus', 'startDate', 'endDate'];

  constructor(private smileysService: SmileysService,
              // private artworkService: ArtworkService,
              private artworkApiGateway: ArtworkService,
              private router: Router,
              private route: ActivatedRoute) {
    console.log(smileysService.getSmiley() + ' from ArtworkDetailComponent constructor');

    this.usecase = this.router.getCurrentNavigation()?.extras.state?.artworkDetailUsecase;

    if (this.usecase !== ArtworkDetailUsecaseEnum.adminCreate) {
      this.artworkId = this.route.snapshot.paramMap.get('artworkId');
    }

    console.log('usecase: ' + this.usecase);
  }

  ngOnInit(): void {
    if (this.artworkId) {
      // this.artwork = this.artworkService.getArtworkById(this.artworkId);
    }

    this.initForm();
  }

  private initForm(): void {
    // prefix 'f' means 'form field';

    // step 1, initialize all fields with empty strings:
    // let id = '';
    let ffTitle = null;
    let ffArtForm = Artwork.ArtFormEnum.Painting;
    let ffDescription = null;
    let ffStorageLocation = null;
    let ffArtist = null;
    let ffProducer = null;
    let ffProductSerialNumber = null;
    const ffImageUrls = new FormArray([]);
    let ffDateObtained: Date = new Date(1970, 1, 1);
    let ffMarketValue: number | undefined;
    let ffStatus = Artwork.StatusEnum.Available;
    let ffNextAvailableDate = new Date();
    let ffComment = null;

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

      this.artwork.imageUrls?.forEach((imageUrl: string, index: number) => {
        ffImageUrls.push(new FormControl({value: imageUrl, disabled: this.readOnly()}));
      });

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
        {validators: [Validators.required]}),
      artForm: new FormControl({value: ffArtForm, disabled: this.readOnly()},
        {validators: [Validators.required]}),
      description: new FormControl({value: ffDescription, disabled: this.readOnly()}),
      storageLocation: new FormControl({value: ffStorageLocation, disabled: this.readOnly()},
        {validators: [Validators.required]}),
      artist: new FormControl({value: ffArtist, disabled: this.readOnly()}),
      producer: new FormControl({value: ffProducer, disabled: this.readOnly()}),
      productSerialNumber: new FormControl({value: ffProductSerialNumber, disabled: this.readOnly()}),
      dateObtained: new FormControl({value: ffDateObtained, disabled: this.readOnly()}),
      marketValue: new FormControl({value: ffMarketValue, disabled: this.readOnly()}),
      status: new FormControl({value: ffStatus, disabled: this.readOnly()},
        {validators: [Validators.required]}),
      nextAvailableDate: new FormControl({value: ffNextAvailableDate, disabled: this.readOnly()}),
      imageUrls: ffImageUrls,
      comment: new FormControl({value: ffComment, disabled: this.readOnly()})
    });
  }

  onEdit(): void {
    console.log(this.smileysService.getSmiley());
    console.log('Going to edit the artwork: ' + this.artwork);
    this.usecase = this.detailUsecase.adminUpdate;

    // tslint:disable-next-line:forin
    for (const field in this.artworkForm.controls) { // 'field' is a string
      console.log(field);

      this.artworkForm.get(field)?.enable();
    }

    console.log(this.usecase);
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

      for (const field in this.artworkForm.controls) { // 'field' is a string
        if (field !== 'imageUrls') {
          this.artworkForm.get(field)?.setValue(this.artwork[field]);
          this.artworkForm.get(field)?.disable();
        }
      }

      const imageUrlFa = this.getImageUrlFormArray();
      imageUrlFa.clear();
      this.artwork.imageUrls.forEach((url: string) => {
        imageUrlFa.push(new FormControl({value: url, disabled: true}));
        console.log('How many items in imageUrlFa? ' + this.getImageUrlCtrls().length);
      });

    } else if (this.usecase === this.detailUsecase.adminCreate) {
      this.backToCallerUrl();
    }
  }

  private backToCallerUrl(message?: string): void {
    // back to previous page
    const {returnUrl} = window.history.state;
    console.log('back to caller URL: ' + returnUrl + ', message: ' + message);
    if (message) {
      this.router.navigateByUrl(returnUrl || '', {
        state: {
          messageToShow: message
        }
      });
    } else {
      this.router.navigateByUrl(returnUrl || '');
    }
  }

  onReset(): void {

  }

  onSubmit(): void {
    console.log(this.smileysService.getSmiley() +  ' ArtworkDetailComponent.onSubmit() is called' );
    if (this.usecase === this.detailUsecase.adminUpdate) {

    } else if (this.usecase === this.detailUsecase.adminCreate) {
      const newArtwork: NewArtwork = this.artworkForm.value;
      this.artworkApiGateway.addArtwork(newArtwork).subscribe((respData) => {
        console.log(respData.message);
        this.backToCallerUrl(respData.message);
      });
    }
  }

  editable(): boolean {
    return this.usecase === this.detailUsecase.adminUpdate
      || this.usecase === this.detailUsecase.adminCreate;
  }

  isEditing(): boolean {
    return this.usecase === this.detailUsecase.adminUpdate
      || this.usecase === this.detailUsecase.adminCreate;
  }

  getImageUrlCtrls(): FormControl[] {
    return (this.artworkForm.get('imageUrls') as FormArray).controls as FormControl[];
  }

  getImageUrlFormArray(): FormArray {
    return this.artworkForm.get('imageUrls') as FormArray;
  }

  private readOnly(): boolean {
    return this.usecase === this.detailUsecase.adminRead
      || this.usecase === this.detailUsecase.userRead;
  }

}
