import { Component, OnInit } from '@angular/core';

import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  constructor(private requestService: RequestService) { }

  public inputValue = {
    tag: ''
  };


  ngOnInit(): void {
  }

  getValue(event): void {
    // получаем значение поля инпут и передаём в сервис
    const value = event.target.value;
    this.requestService.getTag(value);
  }

}
