import { Component, OnInit } from "@angular/core";
import { FormControl, FormControlName, FormGroup, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material";
import { ModeloIncidenciaCrear } from "../models/model.service";
import { SqlIncidencia } from "../sql/sql.incidencia.service";

import { ToastrService } from 'ngx-toastr';

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
  selector: "app-incidencias",
  templateUrl: "./incidencias.component.html",
  styleUrls: ["./incidencias.component.css"]
})
export class IncidenciasComponent implements OnInit {

  constructor(private sql: SqlIncidencia, private toastr: ToastrService) { }

  /*Esto va con la clase implementada arriba, mas info: https://material.angular.io/components/input/overview */
  matcher = new MyErrorStateMatcher();


  formControlIncidencia = new FormGroup({
    formControlInputPuerta: new FormControl('', [
      Validators.required
    ]),
    formControlInputEmail: new FormControl('', [
      Validators.required
    ]),
    formControlInputTelefono: new FormControl('', [
      Validators.required
    ]),
    formControlInputDescripcion: new FormControl('', [
      Validators.required
    ])
  });

  incidencia: ModeloIncidenciaCrear;


  ngOnInit() { }

  enviar() { 
    this.incidencia = new ModeloIncidenciaCrear(
      this.formControlIncidencia.get('formControlInputPuerta').value,
      this.formControlIncidencia.get('formControlInputEmail').value,
      this.formControlIncidencia.get('formControlInputTelefono').value,
      this.formControlIncidencia.get('formControlInputDescripcion').value
    )
    this.sql.nuevaIncidencia(this.incidencia).subscribe(() => {
      this.toastr.success("Incidencia enviada con exito!","", {
        "closeButton": true,
        "progressBar": true,
      });
    });
  }
  limpiar() {
    this.formControlIncidencia.reset()
  }
}
