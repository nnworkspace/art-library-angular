import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.scss']
})
export class ArtworksComponent implements OnInit {

  private offset = 0;
  private limit = 25;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log('');

    const params = this.route.snapshot.queryParamMap;

    const hasOffset = params.has('offset');
    const hasLimit = params.has('limit');

    if (hasOffset){
      this.offset = +params.get('offset')!;
    }

    if (hasLimit) {
      if (params.get('limit')) {
        this.limit = +params.get('limit')!;
      }
    }

    if (!hasOffset || !hasLimit) {
      this.router.navigate(['/artworks'],
        {queryParams: {offset: this.offset, limit: this.limit}});
    }

  }

}
