import { ActaDesplegada } from './../models/acta-desplegada.service';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { SqlActas } from '../sql/sql.actas.service';
import { Subscription } from '../../../node_modules/rxjs';

import Popper from 'popper.js'
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { ModeloActas } from '../models/model.service';

@Component({
  selector: 'app-actas',
  templateUrl: './actas.component.html',
  styleUrls: ['./actas.component.css']
})
export class ActasComponent implements OnInit {

  constructor(private sql: SqlActas, private router: Router, private route: ActivatedRoute, private actaDesplegada: ActaDesplegada) { }

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
}
