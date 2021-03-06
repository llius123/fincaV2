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
        public propietarios_presentes: string
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
        public tipo_id: number,
        public iva: number,
        public cuota_iva: number,
        public retencion: number,
        public cuota_retencion: number
    ) {}
}

export class ModeloIncidenciaCrear {
    constructor(
        public puerta: string,
        public email: string,
        public telefono: string,
        public descripcion: string
    ) {}
}

export class ModeloNoticia {
    constructor(
        public id: number,
        public descripcion: string,
        public fecha: string
    ) {}
}