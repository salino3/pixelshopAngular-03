import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {
  isDisabled: boolean = false;
  showModal: boolean = false;
  constructor() {
    this.isDisabled = true;
  }

  ngOnInit(): void {}
}
