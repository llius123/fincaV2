import { ModeloActas } from './../models/model.service';
import { Injectable } from '../../../node_modules/@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { map } from '../../../node_modules/rxjs/operators';

import * as moment from 'moment'

@Injectable()
export class SqlActas {

    api: string = "http://localhost:3000";
    url: string = "";

    arrayModelo = [];
    arrayModeloSimple: ModeloActas;

    constructor(private http: HttpClient) { }


    /**
     *
     *  Aqui formateo la fecha de la base de datos con la libreria momentjs
     * @returns Array de objector ModeloActas
     * @memberof SqlActas
     */
    listaTodasActas() {
        this.url = `${this.api}/listaTodasActas`;
        return this.http.get(this.url)
            .pipe(map(
                (data: any) => {
                    this.arrayModelo = [];
                    for (var _i = 0; _i < data.length; _i++) {
                        let item;
                        item = data[_i];
                        let fecha;
                        fecha = moment(item.fecha);

                        let dia = fecha.date();
                        let mes = fecha.month() +1;
                        let anyo = fecha.year();

                        let fechaFormateado = `${dia}-${mes}-${anyo}`;

                        this.arrayModeloSimple = new ModeloActas(
                            item.id, item.lugar, fechaFormateado, item.caracter_convocatorio, item.autor_convocatoria, item.acuerdos_adoptados, item.propietarios_derecho_voto
                        );
                        this.arrayModelo.push(this.arrayModeloSimple)
                    }
                    return this.arrayModelo
                }
            ));
    }

    /**
     * Busco un año y muestro una lista de actas que coincidan con ese año
     *
     * @param {string} fecha
     * @returns
     * @memberof SqlActas
     */
    busquedaFecha(fecha: string) {
        this.url = `${this.api}/busquedaFecha/${fecha}`;
        return this.http.get(this.url)
            .pipe(map(
                (data: any) => {
                    this.arrayModelo = [];
                    for (var _i = 0; _i < data.length; _i++) {
                        let item;
                        item = data[_i];
                        let fecha;
                        fecha = moment(item.fecha);

                        let dia = fecha.date();
                        let mes = fecha.month() + 1;
                        let anyo = fecha.year();

                        let fechaFormateado = `${dia}-${mes}-${anyo}`;

                        this.arrayModeloSimple = new ModeloActas(
                            item.id, item.lugar, fechaFormateado, item.caracter_convocatorio, item.autor_convocatoria, item.acuerdos_adoptados, item.propietarios_derecho_voto
                        );
                        this.arrayModelo.push(this.arrayModeloSimple)
                    }
                    return this.arrayModelo
                }
            ))
    }

}