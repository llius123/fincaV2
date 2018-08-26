import { map } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SqlActas } from '../sql/sql.actas.service';
import { Subscription } from '../../../node_modules/rxjs';


@Component({
  selector: 'app-actas',
  templateUrl: './actas.component.html',
  styleUrls: ['./actas.component.css']
})
export class ActasComponent implements OnInit {

  constructor(private sql: SqlActas) { }

  fechas = [];

  todasActas: Subscription;

  ngOnInit() {  
    this.listarFechaActas();
  }


  listarFechaActas() {
    this.todasActas = this.sql.listaTodasActas()
      .pipe(
        map(actas => {
          for (let a of actas) {
            this.fechas.push({ id: a.id, fecha: a.fecha });
          }
        })
      ).subscribe()
  }



}
