import { Component, OnInit } from "@angular/core";
import { FormControl, FormControlName, FormGroup } from "@angular/forms";

@Component({
  selector: "app-incidencias",
  templateUrl: "./incidencias.component.html",
  styleUrls: ["./incidencias.component.css"]
})
export class IncidenciasComponent implements OnInit {
  formControlIncidencia = new FormGroup({
    formControlInputPuerta: new FormControl(),
    formControlInputEmail: new FormControl(),
    formControlInputTelefono: new FormControl(),
    formControlInputDescripcion: new FormControl()
  });

  constructor() {}

  ngOnInit() {}

  enviar() {}
  limpiar() {
    this.formControlIncidencia.reset()
  }
}
