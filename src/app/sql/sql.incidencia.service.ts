import { ModeloActas, ModeloIncidenciaCrear } from '../models/model.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SqlIncidencia {

    api: string = "http://localhost:3000";
    url: string = "";

    constructor(private http: HttpClient) {}

    nuevaIncidencia(incidencia: ModeloIncidenciaCrear) {
        this.url = `${this.api}/nuevaIncidencia/${incidencia.puerta}/${incidencia.email}/${incidencia.telefono}/${incidencia.descripcion}`;
        return this.http.post(this.url, incidencia)
    }
}