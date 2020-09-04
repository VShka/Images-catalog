import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  constructor() { }

  public inputValue = {
    tag: ''
  };

  value: string;

  ngOnInit(): void {
  }

  getValue(event): string {
    console.log(event.target.value);
    return this.value = event.target.value;
  }

}
