import { Component, OnInit, Sanitizer, SecurityContext } from "@angular/core";
import {
  Router,
  ActivatedRoute
} from "../../../../node_modules/@angular/router";
import {
  AdminListaTipo,
  AdminListaBoolean,
  ModeloActas
} from "../../models/model.service";
import { ErrorStateMatcher } from "@angular/material";

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from "moment";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  Validators
} from "../../../../node_modules/@angular/forms";
import { SqlFactura } from "../../sql/sq.factura.service";

import {
  FileUploader,
  FileSelectDirective
} from "ng2-file-upload/ng2-file-upload";
const URL = "http://localhost:3000/api/upload";

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
  selector: "app-admin-acta",
  templateUrl: "./admin-acta.component.html",
  styleUrls: ["./admin-acta.component.css"],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "es-ES" },
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class AdminActaComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sqlFactura: SqlFactura
  ) {}

  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: "photo"
  });

  matcher = new MyErrorStateMatcher();

  accion: string;

  listaTipo: AdminListaTipo;
  listaBoolean: AdminListaBoolean;

  nuevaActa: ModeloActas;

  crearActa: FormGroup;

  ngOnInit() {
    this.crearObjetos();
    this.cargaComponente();
    this.cargarHTML();
    this.nuevoFormulario();
    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      console.log("ImageUpload:uploaded:", item, status, response);
      alert("File uploaded successfully");
    };
  }
  nuevoFormulario() {
    this.crearActa = new FormGroup({
      lugar: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
      caracter: new FormControl(null, Validators.required),
      autor: new FormControl(null, Validators.required),
      acuerdos: new FormControl(null, Validators.required),
      propietarios: new FormControl(null, Validators.required)
    });
  }
  crearObjetos() {
    this.listaTipo = new AdminListaTipo();
    this.listaBoolean = new AdminListaBoolean();
  }

  cargaComponente() {
    this.route.params.subscribe((data: any) => {
      this.accion = data.accion;
    });
  }

  volver() {
    this.router.navigate(["panel-personal/administrador"]);
  }

  cargarHTML() {
    switch (this.accion) {
      case this.listaTipo.crear:
        this.listaBoolean.crear = true;
        break;
      case this.listaTipo.editar:
        this.listaBoolean.editar = true;
        break;
      case this.listaTipo.eliminar:
        this.listaBoolean.eliminar = true;
    }
  }

  enviar() {
    switch (this.accion) {
      case this.listaTipo.crear:
        const fecha = this.crearActa.get("fecha").value._i;
        const fechaFormateada = `${fecha.year}-${fecha.month}-${fecha.date}`;

        this.nuevaActa = new ModeloActas(
          null,
          this.crearActa.get("lugar").value,
          fechaFormateada,
          this.crearActa.get("caracter").value,
          this.crearActa.get("autor").value,
          this.crearActa.get("acuerdos").value,
          this.crearActa.get("propietarios").value
        );
        break;
      case this.listaTipo.editar:
        break;
      case this.listaTipo.eliminar:
        break;
    }
  }

  limpiar() {
    this.crearActa.reset();
  }
}
