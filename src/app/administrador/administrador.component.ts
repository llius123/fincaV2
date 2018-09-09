import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],

})
export class AdministradorComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  acta: string = 'acta';
  factura: string = 'factura';
  incidencia: string = 'incidencia';
  usuario: string = 'usuario';

  crear(data: string) {
    switch (data) {
      case this.acta:
        this.router.navigate(['acta/crear'], { relativeTo: this.route })
        break;
      case this.factura:
        this.router.navigate(['factura/crear'], { relativeTo: this.route })
        break;
      case this.incidencia:
        this.router.navigate(['incidencia/crear'], { relativeTo: this.route })
        break;
      case this.usuario:
        this.router.navigate(['usuario/crear'], { relativeTo: this.route })
        break;
    }
  }
  editar(data: string) {
    switch (data) {
      case this.acta:
        this.router.navigate(['acta/editar'], { relativeTo: this.route })
        break;
      case this.factura:
        this.router.navigate(['factura/editar'], { relativeTo: this.route })
        break;
      case this.incidencia:
        this.router.navigate(['incidencia/editar'], { relativeTo: this.route })
        break;
      case this.usuario:
        this.router.navigate(['usuario/editar'], { relativeTo: this.route })
        break;
    }
  }
  eliminar(data: string) {
    switch (data) {
      case this.acta:
        this.router.navigate(['acta/eliminar'], { relativeTo: this.route })
        break;
      case this.factura:
        this.router.navigate(['factura/eliminar'], { relativeTo: this.route })
        break;
      case this.incidencia:
        this.router.navigate(['incidencia/eliminar'], { relativeTo: this.route })
        break;
      case this.usuario:
        this.router.navigate(['usuario/eliminar'], { relativeTo: this.route })
        break;
    }
  }
}
