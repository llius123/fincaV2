import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ModeloUsuario } from '../models/model.service'
import { map } from "rxjs/operators";
@Injectable()
export class SqlUsuario {

    api: string = "http://localhost:3000";
    url: string = "";

    constructor(private http: HttpClient) { }


    /**
     *
     *
     * @param {number} id
     * @returns Usuario con un id especifico
     * @memberof SqlUsuario
     */
    usuarioId(id: number) {
        this.url = `${this.api}/usuarioId/${id}`;
        return this.http.get(this.url)
            .pipe(
                map((data) => {
                    const usuario = new ModeloUsuario(
                        data[0].id, data[0].nombre, data[0].telefono, data[0].puerta, data[0].usuario, data[0].contrasenya, data[0].tipo_id, data[0].administrador
                    );
                    return usuario
                })
            )
    }
}