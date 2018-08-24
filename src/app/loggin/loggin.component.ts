import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SqlQuerys } from '../sql/sql.loggin.service';

import { ModeloLoggin, ModeloUsuario } from '../models/loggin.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  constructor(private toastr: ToastrService, private sqlQuerys: SqlQuerys, private router: Router, private route: ActivatedRoute) { }

  modelo = new ModeloLoggin(null, null);
  usuario;

  logginForm: FormGroup;

  errorLoggin: boolean = false;

  logginValue = [];

  ngOnInit() {
    this.logginForm = new FormGroup({
      user: new FormControl(null, [Validators.required]),
      pass: new FormControl(null, [Validators.required])
    });
  }
  autologin(){
    this.sqlQuerys.loggin('test','test')
    .pipe(map(
      (data) => {
          this.validarDatos(data)
      })).subscribe()
  }

  iniciarSesion() {
    this.modelo.usuario = this.logginForm.get('user').value;
    this.modelo.contraseña = this.logginForm.get('pass').value;

    this.sqlQuerys.loggin(this.modelo.usuario, this.modelo.contraseña)
      .pipe(map(
        (data) => {
            this.validarDatos(data)
        })).subscribe()
  }

  validarDatos(user: ModeloUsuario) {
    if(user === null){
      this.errorLoggin = true;
    }else{
      this.router.navigate(['panel-personal'])
    }
  }

}
