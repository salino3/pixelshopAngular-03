import { Component, OnInit, OnDestroy, ViewChild, Inject } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Product } from '../interface/product';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css'],
})
export class StatefulComponent implements OnInit, OnDestroy {
  @ViewChild(ConfirmComponent, {
    static: false,
  })
  confirmChild!: ConfirmComponent;

  cursomatriculado: any;
  shopModel: any;
  errorHttp: boolean = false;
  boughtItems: Array<Product> = [];
  boughtItem: any;

  isDisabled: boolean = false;

  @Inject(HttpResponse)
  private shopSubscription!: Subscription;

  constructor(private http: HttpClient) {
    this.boughtItems = [];
    this.shopModel = { shopItems: [] };
  }

  ngOnInit(): void {
    this.shopSubscription = this.http.get('assets/cursos.json').subscribe(
      (respuesta: any): void => {
        this.shopModel.shopItems = respuesta;
      },
      (_respuesta: Response) => {
        this.errorHttp = true;
      }
    );

    /*
   this.onGlobalKeyboard();
    */

  }
  ngOnDestroy(): void {
    this.shopSubscription.unsubscribe();
    document.removeEventListener('keypress', this.onKeyboard);
  }

  clickItem(_curso: Product): void {
    this.boughtItems.push(_curso);
  }

  cursoMatriculado(_event: Product): void {
    this.clickItem(_event);
    this.onConfirm();
 
    this.confirmChild.isDisabled = false;
  }
  finalPrice() {
    if (this.boughtItems) {
      return this.boughtItems.reduce(
        (prev: any, item: any | Product): any => prev + item.price,
        0
      );
    }
  }

  onConfirm() {
    alert('Has añadido un nuevo curso');
  }

  onKeyboard(_event: any) {
    console.log(_event);
    if(_event.key === 'Enter'){
      this.onConfirm();
    }
  }
  /*
  onGlobalKeyboard(){
    document.addEventListener('keypress', (eventoGlobal) =>{
      this.onKeyboard(eventoGlobal);
    })
  } */

}




