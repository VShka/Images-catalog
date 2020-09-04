import { Component, OnInit } from '@angular/core';

import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  public btnState = {
    group: 'Группировать',
    ungroup: 'Разгруппировать'
  };
  public defaultBtnState = this.btnState.group;
  public imageUrl: string;


  ngOnInit(): void {
  }

  public sendRequest(): void {
    this.requestService.getImage().subscribe((image: any) => this.imageUrl = image.data.image_url);
  }

  public deleteCatalog(): void {
    console.log('Its working');
  }

  public toggleState(): string {
    if (this.defaultBtnState === this.btnState.group) {
      return this.defaultBtnState = this.btnState.ungroup;
    }
    return this.defaultBtnState = this.btnState.group;
  }

}
