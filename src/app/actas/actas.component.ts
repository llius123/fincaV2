import { ActaDesplegada } from './../models/acta-desplegada.service';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { SqlActas } from '../sql/sql.actas.service';
import { Subscription } from '../../../node_modules/rxjs';

import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { ModeloActas } from '../models/model.service';

import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: "app-actas",
  templateUrl: "./actas.component.html",
  styleUrls: ["./actas.component.css"]
})
export class ActasComponent implements OnInit {
  constructor(
    private sql: SqlActas,
    private router: Router,
    private route: ActivatedRoute,
    private actaDesplegada: ActaDesplegada
  ) {}

  /*Esto va con la clase implementada arriba, mas info: https://material.angular.io/components/input/overview */
  matcher = new MyErrorStateMatcher();
  anyoFormControl = new FormControl("", [
    Validators.required,
    Validators.pattern('([0-9]+){4,4}')
  ]);
  
  actas = [];

  dataPicker;

  todasActas: Subscription;

  ngOnInit() {
    this.listarFechaActas();
  }

  listarFechaActas() {
    this.todasActas = this.sql
      .listaTodasActas()
      .pipe(
        map(actas => {
          this.actas = actas;
        })
      )
      .subscribe();
  }

  acta_desplegada(acta: ModeloActas) {
    this.router.navigate(["acta-desplegada"], { relativeTo: this.route });
    this.actaDesplegada.guardarActa(acta);
  }


  /**
   *Obtengo la fecha del formControl
   *
   * @param {*} fecha
   * @memberof ActasComponent
   */
  buscar(fecha: any) {
    this.sql.busquedaFecha(fecha).subscribe(
      (data) => {
        this.actas = data
      }
    )
  }

  limpiar() {
    this.listarFechaActas();
  }
}