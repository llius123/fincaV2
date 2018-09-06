import { Injectable } from "@angular/core";
import { ModeloFactura } from "./model.service";

@Injectable()
export class FacturaDesplegada {
    
    private facturaGuardada: ModeloFactura;
    
    constructor() {}

    setFactura(factura: ModeloFactura) {
        this.facturaGuardada = null;
        this.facturaGuardada = factura;
    }

    getFactura() {
        return this.facturaGuardada;
    }
}