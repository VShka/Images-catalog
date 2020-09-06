import { Injectable } from '@angular/core';

import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public imageUrl: string;

  constructor(private requestService: RequestService) { }


  getImageUrl(): any {
    this.requestService.getImage().subscribe((image: any) => {
      const imageUrl = image.data.image_url;
      return imageUrl;
    });
  }
}
