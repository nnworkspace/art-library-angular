import { Component, OnInit } from '@angular/core';
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
  artwork = {} as Artwork;
  artworkId: string | null = null;
  artworkForm!: FormGroup;
  artFormOptions = Object.values(Artwork.ArtFormEnum);
  statusOptions = Object.values(Artwork.StatusEnum);

  // artFormOptions = Artwork.ArtFormEnum.iterator();

  constructor(private smileysService: SmileysService,
              private artworkService: ArtworkService,
              private router: Router,
              private route: ActivatedRoute) {
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
    this.artworkForm.get('title')?.enable();
    this.artworkForm.get('artForm')?.enable();
    this.artworkForm.get('description')?.enable();

    // this.router.navigate(['artworks', this.artwork.id], {
    //   state: { artworkDetailUsecase: this.detailUsecase.adminUpdate }
    // });

    console.log(this.usecase);
  }

  onSubmit(): void {

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
    let ffImageUrls: string[] = [] ;
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
        ffImageUrls = this.artwork.imageUrls;
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
      title: new FormControl({value: ffTitle, disabled: this.readOnly()}, Validators.required),
      artForm: new FormControl({value: ffArtForm, disabled: this.readOnly()}, Validators.required),
      description: new FormControl({value: ffDescription, disabled: this.readOnly()}),
      storageLocation: new FormControl(ffStorageLocation, Validators.required),
      artist: new FormControl(ffArtist),
      producer: new FormControl(ffProducer),
      productSerialNumber: new FormControl(ffProductSerialNumber),
      imageUrls: new FormControl(ffImageUrls),
      dateObtained: new FormControl(ffDateObtained),
      marketValue: new FormControl(ffMarketValue),
      status: new FormControl(ffStatus, Validators.required),
      nextAvailableDate: new FormControl(ffNextAvailableDate),
      comment: new FormControl(ffComment)
    });
  }

  private readOnly(): boolean {
    return this.usecase === this.detailUsecase.adminRead
      || this.usecase === this.detailUsecase.userRead;
  }
}
