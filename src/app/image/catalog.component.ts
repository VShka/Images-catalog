import { Component, OnInit } from '@angular/core';

import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public imagesUrl: any = [];
  public btnState = {
    group: 'Группировать',
    ungroup: 'Разгруппировать'
  };
  public defaultBtnState = this.btnState.group;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }


  public addImage(): any {
    const imageUrl = this.imageService.getImageUrl();

    console.log(imageUrl)

    return this.imagesUrl.push(imageUrl);
  }

  public deleteCatalog(): void {
    // console.log(this.imagesUrl);
    // this.imagesUrl = [];
  }

  public toggleState(): string {
    if (this.defaultBtnState === this.btnState.group) {
      return this.defaultBtnState = this.btnState.ungroup;
    }
    return this.defaultBtnState = this.btnState.group;
  }


}
