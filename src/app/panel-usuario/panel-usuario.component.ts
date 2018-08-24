import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css']
})
export class PanelUsuarioComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
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
