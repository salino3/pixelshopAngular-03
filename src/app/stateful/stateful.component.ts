import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css'],
})
export class StatefulComponent implements OnInit {
  
  @ViewChild(ConfirmComponent, {
    static: false
  }) confirmChild: ConfirmComponent | undefined ;

  shopModel: Shop = new Shop();
  boughtItems: Array<Product> = [];
  boughtItem: any;
  _confirmChild: any;
  isDisabled: boolean = false;

  constructor() {
    this.boughtItems = [];
  }

  ngOnInit(): void {}

  clickItem(_curso: Product): void {
    this.boughtItems.push(_curso);
  }

  
  cursoMatriculado(_event: Product): void{
    this.clickItem(_event);
    this._confirmChild.isDisabled = false;
  }
  finalPrice() {
    if (this.boughtItems) {
      return this.boughtItems.reduce(
        (prev: any, item: any | Product): any => prev + item.price, 0
      );
    }
  }
}




