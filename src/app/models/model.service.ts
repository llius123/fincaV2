import { Injectable } from "@angular/core";

@Injectable()
export class ModeloLoggin {
    constructor(
        public usuario: string,
        public contraseña: string
    ) {}
}

export class ModeloUsuario {
    constructor(
        public id: number,
        public nombre: string,
        public telefono: string,
        public puerta: string,
        public usuario: string,
        public contrasenya: string,
        public tipo_id: number
    ) {}
}

export class ModeloActas {
    constructor(
        public id: number,
        public lugar: string,
        public fecha: string,
        public caracter_convocatorio: string,
        public autor_convocatorio: string,
        public acuerdos_adoptados: string,
        public propietarios_derecho_voto: string
    ) {}
}

export class ModeloFactura {
    constructor(
        public id: number,
        public nombre_empresa: string,
        public descripcion: string,
        public base_imponible: number,
        public total_factura: number,
        public imagen: Blob,
        public fecha: string,
        public tipo_id: number
    ) {}
}