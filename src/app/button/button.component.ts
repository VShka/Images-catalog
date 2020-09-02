import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  public btnState = {
    group: 'Группировать',
    ungroup: 'Разгруппировать'
  };
  public defaultBtnState = this.btnState.group;

  ngOnInit(): void {
  }

  public sendRequest(): any {
    console.log(`It's working!`);
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
