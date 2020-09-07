import { Component } from '@angular/core';

import { RequestService } from '../services/request.service';

interface ImageData {
  tag: string;
  url: string;
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  public arrayImages: ImageData[] = [];
  public arrGroupImages: ImageData [] = [];
  public error: any;
  public btnState = 'Группировать';

  constructor(private requestService: RequestService) {
  }

  public addImage(): void {
    this.requestService.getImage().subscribe(
      (image: any) => {

        // делаем объект типа ImageData для хранения информации каждой картинки
      const imageData = {
        tag: this.requestService.tag,
        url: image.data.image_url
      };

      this.arrayImages.push(imageData);
    },
      (error: any) => this.error = 'Произошла ошибка. Проверьте соединение и повторите попытку.');
  }

  public deleteCatalog(): void {
    this.arrayImages = [];
  }

  public groupImages(): void {
    this.toggleState();

    this.arrayImages.filter( (item) => {
      if (item.tag === item.tag) {
        const imageData = {
          tag: item.tag,
          url: item.url
        };
        this.arrGroupImages.push(imageData);
        this.deleteCatalog();
      }
    });
  }

  // изменение текста кнопки группировки
  private toggleState(): void {
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
