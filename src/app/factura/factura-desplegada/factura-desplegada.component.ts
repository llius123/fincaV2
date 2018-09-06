import { Component, OnInit } from '@angular/core';
import { FacturaDesplegada } from '../../models/factura-desplegada.service';
import { ModeloFactura } from '../../models/model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura-desplegada',
  templateUrl: './factura-desplegada.component.html',
  styleUrls: ['./factura-desplegada.component.css']
})
export class FacturaDesplegadaComponent implements OnInit {

  constructor(private facturaDesplegada: FacturaDesplegada, private router: Router) { }

  factura: ModeloFactura;

  ngOnInit() {
    this.factura = this.facturaDesplegada.getFactura();
  }

  volver() {
    this.router.navigate(['panel-personal/facturas'])
  }

}
