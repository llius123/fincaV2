import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioLoggeado } from '../models/usuarioLoggeado.service';

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css']
})
export class PanelUsuarioComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private backUp: UsuarioLoggeado) { }

  ngOnInit() {
    this.estaLogeado();
  }

  estaLogeado(){
    if(this.backUp.loggeado() === false){
      this.router.navigate(['login']);
    }
  }

  actas() {
    this.router.navigate(['actas'], {relativeTo: this.route})
  }
  facturas() {
    this.router.navigate(['facturas'], {relativeTo: this.route})
  }
  incidencias() {
    this.router.navigate(['incidencias'], {relativeTo: this.route})
  }
  panel_personal() {
    this.router.navigate(['panel_personal'], {relativeTo: this.route})
  }
}
