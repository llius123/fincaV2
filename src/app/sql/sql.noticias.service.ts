import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ModeloNoticia } from "../models/model.service";
import { map } from "rxjs/operators";

import * as moment from "moment";

@Injectable()
export class SqlNoticias {
  constructor(private http: HttpClient) {}

  api: string = "http://localhost:3000";
  url: string = "";

  arrayNoticias = [];
  noticia: ModeloNoticia;

  todasNoticias() {
    this.url = `${this.api}/todasNoticias`;
    return this.http.get(this.url).pipe(
      map((data: any) => {
        this.arrayNoticias = [];
        for (var _i = 0; _i < data.length; _i++) {
          let item;
          item = data[_i];

          let fecha;
          fecha = moment(item.fecha);

          let dia = fecha.date();
          let mes = fecha.month();
          let anyo = fecha.year();

          let fechaFormateado = `${dia}-${mes}-${anyo}`;
          this.noticia = new ModeloNoticia(
            item.id,
            item.descripcion,
            fechaFormateado
          );
          this.arrayNoticias.push(this.noticia)
        }
        return this.arrayNoticias
      })
    );
  }

}
