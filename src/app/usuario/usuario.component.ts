import { UsuarioLoggeado } from '../models/usuarioLoggeado.service';
import { ModeloUsuario } from '../models/model.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SqlQuerys } from '../sql/sql.loggin.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { SqlUsuario } from '../sql/sql.usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  formularioUsuario: FormGroup;

  constructor(private backUp: UsuarioLoggeado, private sql: SqlQuerys, private toastr: ToastrService, private usuario: SqlUsuario) { }

  usuarioLoggeadoInfo: ModeloUsuario;
  actualizarUsuario: ModeloUsuario;



  ngOnInit() {
    this.guardarUsuarioLoggeado()
    this.loadFormulario();
  }

  guardarUsuarioLoggeado() {
    this.usuarioLoggeadoInfo = this.backUp.getUser();
  }
  loadFormulario() {
    this.formularioUsuario = new FormGroup({
      nombre: new FormControl(this.usuarioLoggeadoInfo.nombre, [Validators.required]),
      telefono: new FormControl(this.usuarioLoggeadoInfo.telefono, [Validators.required]),
      puerta: new FormControl(this.usuarioLoggeadoInfo.puerta, [Validators.required]),
      usuario: new FormControl(this.usuarioLoggeadoInfo.usuario, [Validators.required]),
      contrasenya: new FormControl(this.usuarioLoggeadoInfo.contrasenya, [Validators.required])
    })
  }

  formBorderColorValidator(formNombre: string): string {
    switch (formNombre) {
      case 'nombre':
        if (this.formularioUsuario.get(formNombre).valid) {
          return '#23d160'
        } else {
          return '#ff3860';
        }

      case 'telefono':
        if (this.formularioUsuario.get(formNombre).valid) {
          return '#23d160'
        } else {
          return '#ff3860';
        }

      case 'puerta':
        if (this.formularioUsuario.get(formNombre).valid) {
          return '#23d160'
        } else {
          return '#ff3860';
        }

      case 'usuario':
        if (this.formularioUsuario.get(formNombre).valid) {
          return '#23d160'
        } else {
          return '#ff3860';
        }

      case 'contrasenya':
        if (this.formularioUsuario.get(formNombre).valid) {
          return '#23d160'
        } else {
          return '#ff3860';
        }
    }
  }

  actualizar() {
    this.actualizarUsuario = new ModeloUsuario(
      this.usuarioLoggeadoInfo.id,
      this.formularioUsuario.get('nombre').value,
      this.formularioUsuario.get('telefono').value,
      this.formularioUsuario.get('puerta').value,
      this.formularioUsuario.get('usuario').value,
      this.formularioUsuario.get('contrasenya').value,
      this.usuarioLoggeadoInfo.tipo_id,
      this.usuarioLoggeadoInfo.administrador
    )
    this.sql.actualizarUsuario(this.actualizarUsuario)
      .pipe(
        map(
          () => {
            this.toastr.success("Datos de usuario actualizado con exito!", "Actualizado!", {
              "closeButton": true,
              "progressBar": true,
            });
            this.usuario.usuarioId(this.usuarioLoggeadoInfo.id)
              .pipe(
                map((data) => {
                  this.backUp.usuarioLoggeadoSave(data);
                  this.guardarUsuarioLoggeado()
                })
              ).subscribe()
          }))
      .subscribe();
  }
  cancelar() {
    this.formularioUsuario.patchValue({
      nombre: this.usuarioLoggeadoInfo.nombre,
      telefono: this.usuarioLoggeadoInfo.telefono,
      puerta: this.usuarioLoggeadoInfo.telefono,
      usuario: this.usuarioLoggeadoInfo.usuario,
      contrasenya: this.usuarioLoggeadoInfo.contrasenya
    })
  }
}
