import { Component, OnInit } from '@angular/core';

import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public imagesUrl: any = [];
  public btnState = 'Группировать';

  constructor(private requestService: RequestService) {
  }

  ngOnInit(): void {
  }

  public addImage(): void {
    this.requestService.getImage().subscribe((image: any) => {
      const url = image.data.image_url;

      this.imagesUrl.push(url);
    });
  }

  public deleteCatalog(): void {
    this.imagesUrl = [];
  }

  // изменение текста кнопки группировки
  public toggleState(): void {
    const twoStateBtn = {
      group: 'Группировать',
      ungroup: 'Разгруппировать'
    };

    if (this.btnState === twoStateBtn.group) {
      this.btnState = twoStateBtn.ungroup;
    } else {
      this.btnState = twoStateBtn.group;
    }
  }


}
