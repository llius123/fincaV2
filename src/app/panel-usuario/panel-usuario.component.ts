import { map } from "rxjs/operators";
import { SqlNoticias } from "./../sql/sql.noticias.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioLoggeado } from "../models/usuarioLoggeado.service";

@Component({
  selector: "app-panel-usuario",
  templateUrl: "./panel-usuario.component.html",
  styleUrls: ["./panel-usuario.component.css"]
})
export class PanelUsuarioComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private backUp: UsuarioLoggeado,
    private sql: SqlNoticias
  ) {}

  ngOnInit() {
    //this.estaLogeado();
  }

  estaLogeado() {
    if (this.backUp.loggeado() === false) {
      this.router.navigate(["login"]);
    }
  }

  esAdmin() {
    return this.backUp.admin()
  }
  noticias() {
    this.router.navigate(['noticias'], {relativeTo: this.route});
  }

  actas() {
    this.router.navigate(["actas"], { relativeTo: this.route });
  }
  facturas() {
    this.router.navigate(["facturas"], { relativeTo: this.route });
  }
  incidencias() {
    this.router.navigate(["incidencias"], { relativeTo: this.route });
  }
  panel_personal() {
    this.router.navigate(["panel_personal"], { relativeTo: this.route });
  }
  administrador() {
    this.router.navigate(["administrador"], { relativeTo: this.route});
  }
  desconectar() {
    this.backUp.desconectarse();
    this.router.navigate(["login"]);
  }
}
