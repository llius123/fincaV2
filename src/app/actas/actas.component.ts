import { ActaDesplegada } from './../models/acta-desplegada.service';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { SqlActas } from '../sql/sql.actas.service';
import { Subscription } from '../../../node_modules/rxjs';

import { MatDatepickerModule } from '@angular/material/datepicker';

import Popper from 'popper.js'
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { ModeloActas } from '../models/model.service';

import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-actas',
  templateUrl: './actas.component.html',
  styleUrls: ['./actas.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class ActasComponent implements OnInit {

  constructor(private adapter: DateAdapter<any>, private sql: SqlActas, private router: Router, private route: ActivatedRoute, private actaDesplegada: ActaDesplegada) { }

  actas = [];

  todasActas: Subscription;

  ngOnInit() {
    this.listarFechaActas();
  }

  listarFechaActas() {
    this.todasActas = this.sql.listaTodasActas()
      .pipe(
        map(actas => {
          this.actas = actas;
        })
      ).subscribe()
  }

  acta_desplegada(acta: ModeloActas) {
    this.router.navigate(['acta-desplegada'], { relativeTo: this.route })
    this.actaDesplegada.guardarActa(acta)
  }

  buscar(data: any) {
    console.log(data)
  }
}
