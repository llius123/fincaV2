import { Component, OnInit } from '@angular/core';
import { ActaDesplegada } from '../../models/acta-desplegada.service';
import { ModeloActas } from '../../models/model.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-acta-desplegada',
  templateUrl: './acta-desplegada.component.html',
  styleUrls: ['./acta-desplegada.component.css']
})
export class ActaDesplegadaComponent implements OnInit {

  constructor(private actaDesplegada: ActaDesplegada, private router: Router, private route: ActivatedRoute) { }

  acta: ModeloActas;

  ngOnInit() {
    this.acta = this.actaDesplegada.getActa();
  }

  volver(){
    this.router.navigate(['panel-personal/actas'])
  }

}
