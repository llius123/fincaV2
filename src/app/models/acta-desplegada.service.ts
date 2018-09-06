import { Injectable } from "@angular/core";
import { ModeloActas } from "./model.service";

@Injectable()
export class ActaDesplegada {
    
    acta: ModeloActas
    
    constructor() {}

    guardarActa(acta: ModeloActas){
        this.acta = null;
        this.acta = acta;
    }

    getActa(){
        return this.acta;
    }
}