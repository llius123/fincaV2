import { ModeloFactura } from './../models/model.service';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { SqlFactura } from '../sql/sq.factura.service';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor(private sqlFactura: SqlFactura) { }

  facturas: ModeloFactura;
  arrayFacturas: ModeloFactura[];

  arrayTipoFactura = [];

  ngOnInit() {
    this.sqlFactura.todasFacturas()
      .pipe(
        map((data: any) => {
          this.cargarFacturas(data)
        })
      ).subscribe();
    this.sqlFactura.todosLosTipos()
      .pipe(
        map((data) => {
          this.cargarTipoFacturas(data);
        })
      ).subscribe()
  }

  cargarFacturas(factura: any) {
    this.arrayFacturas = factura;
  }
  cargarTipoFacturas(tipos: any) {
    this.arrayTipoFactura = tipos;
  }

  tipoFactura(index: number) {
    index = index -1;
    return this.arrayTipoFactura[index];
  }

}