import { Component,  OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatelessComponent implements OnInit {
  @Output() cursomatriculado: EventEmitter<Product> = new EventEmitter();
  @Input() product: Product | any;
  public matricula!: string;
  private disable: boolean = false;

  boughtItems: any;
  curso: any;
  
  constructor() {}

  ngOnInit(): void {
    this.matricula = 'Matricularse';
  }

  matricularse() {
    this.disable = true;
    this.matricula = '¡Matriculado!';
    this.cursomatriculado.emit(this.product);
  }
  isDisabled() {
    console.log(this.product.title);
    return this.disable;
  }

  mensaje(){
    alert('¿no te vas a descargar la imagen verdad?');
  }
}
