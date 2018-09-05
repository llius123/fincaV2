import { ModeloActas, ModeloFactura } from "./../models/model.service";
import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { map } from "../../../node_modules/rxjs/operators";

import * as moment from "moment";
import { Observable } from "../../../node_modules/rxjs";

@Injectable()
export class SqlFactura {
  api: string = "http://localhost:3000";
  url: string = "";

  constructor(private http: HttpClient) {}

  arrayTodasFacturas = [];
  todasFacturasObjeto: ModeloFactura;
  arrayTipoFacturas = [];

  /**
   *
   *
   * @returns Array de objetos ModeloFacturas con todas las facturas
   * @memberof SqlFactura
   */
  todasFacturas(): Observable<ModeloFactura[]> {
    this.url = `${this.api}/todasFacturas`;
    return this.http.get(this.url).pipe(
      map((data: any) => {
        this.arrayTodasFacturas = [];
        for (var _i = 0; _i < data.length; _i++) {
          let item;
          item = data[_i];

          let fecha;
          fecha = moment(item.fecha);

          let dia = fecha.date();
          let mes = fecha.month();
          let anyo = fecha.year();

          let fechaFormateado = `${dia}-${mes}-${anyo}`;

          this.todasFacturasObjeto = new ModeloFactura(
            item.id,
            item.nombre_empresa,
            item.descripcion,
            item.base_imponible,
            item.total_factura,
            item.imagen,
            fechaFormateado,
            item.tipo_id,
            item.iva,
            item.cuota_iva,
            item.retencion,
            item.cuota_retencion
          );
          this.arrayTodasFacturas.push(this.todasFacturasObjeto);
        }
        return this.arrayTodasFacturas;
      })
    );
  }

  todosLosTipos() {
    this.url = `${this.api}/todosLosTipos`;
    return this.http.get(this.url).pipe(
      map((data: any) => {
        this.arrayTipoFacturas = [];
        for (var _i = 0; _i < data.length; _i++) {
          let item;
          item = data[_i].tipo;
          this.arrayTipoFacturas.push(item);
        }
        return this.arrayTipoFacturas;
      })
    );
  }

  buscarPorTipo(tipo: string) {
    this.url = `${this.api}/buscarPorTipo/${tipo}`;
    return this.http.get(this.url).pipe(
      map((data: any) => {
        this.arrayTodasFacturas = [];
        for (var _i = 0; _i < data.length; _i++) {
          let item;
          item = data[_i];

          let fecha;
          fecha = moment(item.fecha);

          let dia = fecha.date();
          let mes = fecha.month();
          let anyo = fecha.year();

          let fechaFormateado = `${dia}-${mes}-${anyo}`;

          this.todasFacturasObjeto = new ModeloFactura(
            item.id,
            item.nombre_empresa,
            item.descripcion,
            item.base_imponible,
            item.total_factura,
            item.imagen,
            fechaFormateado,
            item.tipo_id,
            item.iva,
            item.cuota_iva,
            item.retencion,
            item.cuota_retencion
          );
          this.arrayTodasFacturas.push(this.todasFacturasObjeto);
        }
        return this.arrayTodasFacturas;
      })
    );
  }

  buscarPorFecha(fechaBusqueda: string) {
    this.url = `${this.api}/buscarPorFecha/${fechaBusqueda}`;
    return this.http.get(this.url).pipe(
      map((data: any) => {
        this.arrayTodasFacturas = [];
        for (var _i = 0; _i < data.length; _i++) {
          let item;
          item = data[_i];

          let fecha;
          fecha = moment(item.fecha);

          let dia = fecha.date();
          let mes = fecha.month();
          let anyo = fecha.year();

          let fechaFormateado = `${dia}-${mes}-${anyo}`;

          this.todasFacturasObjeto = new ModeloFactura(
            item.id,
            item.nombre_empresa,
            item.descripcion,
            item.base_imponible,
            item.total_factura,
            item.imagen,
            fechaFormateado,
            item.tipo_id,
            item.iva,
            item.cuota_iva,
            item.retencion,
            item.cuota_retencion
          );
          this.arrayTodasFacturas.push(this.todasFacturasObjeto);
        }
        return this.arrayTodasFacturas;
      })
    );
  }
}
