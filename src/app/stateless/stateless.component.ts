import { Component,  OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
})
export class StatelessComponent implements OnInit {
  @Output () cursomatriculado: EventEmitter<Product> = new EventEmitter();
  @Input() product: Product | any;
  public matricula!: string;
  private disable: boolean = false;
  
  boughtItems: any;
  curso: any
  constructor() {}

  ngOnInit(): void {
    this.matricula = 'Matricularse';

  }

 matricularse(){
  this.disable = true;
  this.matricula = '¡Matriculado!';
  this.cursomatriculado.emit(this.product);
 }
isDisabled(){
  return !!this.disable;
}

  
}
