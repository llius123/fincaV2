import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ModeloUsuario } from '../models/model.service'
import { map } from "rxjs/operators";

@Injectable()
export class SqlQuerys {
    constructor(private http: HttpClient) { }

    api: string = "http://localhost:3000";
    url: string = "";


    /**
     *  Pregunto a la base de datos si el usuario y la contraseña existe en la base de datos
     *
     * @param {string} user
     * @param {string} password
     * @returns null o el usuario loggeado
     * @memberof SqlQuerys
     */
    loggin(user: string, password: string) {
        this.url = `${this.api}/loggin/${user}/${password}`;
        return this.http.get(this.url)
            .pipe(map((data: any) => {
                if (data.length > 0) {
                    const usuario = new ModeloUsuario(
                        data[0].id, data[0].nombre, data[0].telefono, data[0].puerta, data[0].usuario, data[0].contrasenya, data[0].tipo_id
                    );
                    return usuario;
                } else {
                    return null;
                }
            }))
    }


    /**
     *
     *
     * @param {ModeloUsuario} usuario
     * @returns nada, solo actualizo base de datos
     * @memberof SqlQuerys
     */
    actualizarUsuario(usuario: ModeloUsuario) {
        this.url = `${this.api}/actualizarUsuario/${usuario.id}/${usuario.nombre}/${usuario.telefono}/${usuario.puerta}/${usuario.usuario}/${usuario.contrasenya}/${usuario.tipo_id}`;
        return this.http.put(this.url, usuario);
    }
}