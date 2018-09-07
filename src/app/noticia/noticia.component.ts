import { Component, OnInit } from '@angular/core';
import { SqlNoticias } from '../sql/sql.noticias.service';
import { map } from 'rxjs/operators';
import { ModeloNoticia } from '../models/model.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  constructor(private sql: SqlNoticias) { }

  noticias;

  ngOnInit() {
    this.sql.todasNoticias().pipe(map(
      (data) => {
        this.noticias = data;
      }
    )) .subscribe()
  }

}
