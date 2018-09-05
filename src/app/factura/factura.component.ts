import { ModeloFactura } from "./../models/model.service";
import { map } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { SqlFactura } from "../sql/sq.factura.service";
import { Router, ActivatedRoute } from "../../../node_modules/@angular/router";
import { FacturaDesplegada } from "../models/factura-desplegada.service";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material";

import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';

const moment = _moment;

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-factura",
  templateUrl: "./factura.component.html",
  styleUrls: ["./factura.component.css"],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class FacturaComponent implements OnInit {
  formControlSelect = new FormControl();
  /*Esto va con la clase implementada arriba, mas info: https://material.angular.io/components/input/overview */
  matcher1 = new MyErrorStateMatcher();
  matcher2 = new MyErrorStateMatcher();
  anyoFormControl = new FormControl("", [
    Validators.required
  ]);
  anyoFormContro2 = new FormControl("", [
    Validators.required
  ]);

  constructor(
    private sqlFactura: SqlFactura,
    private router: Router,
    private route: ActivatedRoute,
    private facturaDesplegada: FacturaDesplegada
  ) { }

  facturas: ModeloFactura;
  factura2: ModeloFactura;
  arrayFacturas: ModeloFactura[];

  arrayTipoFactura = [];

  ngOnInit() {
    this.sqlFactura
      .todasFacturas()
      .pipe(
        map((data: any) => {
          this.cargarFacturas(data);
        })
      )
      .subscribe();
    this.sqlFactura
      .todosLosTipos()
      .pipe(
        map(data => {
          this.cargarTipoFacturas(data);
        })
      )
      .subscribe();
  }

  cargarFacturas(factura: any) {
    this.arrayFacturas = factura;
  }
  cargarTipoFacturas(tipos: any) {
    this.arrayTipoFactura = tipos;
  }

  tipoFactura(index: number) {
    index = index - 1;
    return this.arrayTipoFactura[index];
  }

  factura_desplegada(factura: ModeloFactura) {
    this.factura2 = factura;
    this.factura2.tipo_id = this.tipoFactura(this.factura2.tipo_id);
    this.facturaDesplegada.setFactura(this.factura2);
    this.router.navigate(["factura-desplegada"], { relativeTo: this.route });
  }

  tipoFacturaBuscar: boolean = false;
  tipoFechaBuscar: boolean = false;

  seleccion(valor: string) {
    switch (valor) {
      case "factura":
        this.tipoFacturaBuscar = true;
        this.tipoFechaBuscar = false;
        break;
      case "fecha":
        this.tipoFacturaBuscar = false;
        this.tipoFechaBuscar = true;
        break;
      default:
        this.tipoFacturaBuscar = false;
        this.tipoFechaBuscar = false;
        break;
    }
  }

  buscar(data: any, tipo: string) {
    switch (tipo) {
      case "fecha":
        this.sqlFactura
          .buscarPorFecha(data)
          .pipe(
            map((data: any) => {
              this.cargarFacturas(data);
            })
          )
          .subscribe();
        break;
      case "tipo":
        this.sqlFactura
          .buscarPorTipo(data)
          .pipe(
            map((data: any) => {
              this.cargarFacturas(data);
            })
          )
          .subscribe();
        break;
    }
  }
}
