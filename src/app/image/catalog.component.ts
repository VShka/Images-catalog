import { Component, OnInit } from '@angular/core';

import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public imagesUrl: any = [];
  public state = 'Группировать';

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

  // изменение текста кнопки группировки
  public toggleState(): void {
    const twoStateBtn = {
      group: 'Группировать',
      ungroup: 'Разгруппировать'
    };

    if (this.state === twoStateBtn.group) {
      this.state = twoStateBtn.ungroup;
    } else {
      this.state = twoStateBtn.group;
    }
  }


}
