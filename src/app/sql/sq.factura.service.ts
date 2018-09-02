import { ModeloActas, ModeloFactura } from './../models/model.service';
import { Injectable } from '../../../node_modules/@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { map } from '../../../node_modules/rxjs/operators';

import * as moment from 'moment'
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class SqlFactura {
    api: string = "http://localhost:3000";
    url: string = "";

    constructor(private http: HttpClient) {}

    arrayTodasFacturas = [];
    todasFacturasObjeto: ModeloFactura;

    
    /**
     *
     *
     * @returns Array de objetos ModeloFacturas con todas las facturas
     * @memberof SqlFactura
     */
    todasFacturas() {
        this.url = `${this.api}/todasFacturas`;
        return this.http.get(this.url)
        .pipe(
            map(
                (data: any) => {
                    this.arrayTodasFacturas = []
                    for (var _i = 0; _i < data.length; _i++) {
                        let item;
                        item = data[_i];

                        this.todasFacturasObjeto = new ModeloFactura(
                            item.id,
                            item.nombre_empresa,
                            item.descripcion,
                            item.base_imponible,
                            item.total_factura,
                            item.imagen,
                            item.tipo_id
                        );
                        this.arrayTodasFacturas.push(this.todasFacturasObjeto)
                    }
                    return this.arrayTodasFacturas;
                }
            ))
    }
}