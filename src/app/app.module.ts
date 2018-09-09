import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ToastrModule } from 'ngx-toastr';

import {
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatIconModule
} from "@angular/material";

import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';
import { AppRoute } from './app.route';
import { SqlQuerys } from "./sql/sql.loggin.service";
import { ModeloLoggin } from "./models/model.service";
import { PanelUsuarioComponent } from './panel-usuario/panel-usuario.component';
import { ActasComponent } from './actas/actas.component';
import { FacturaComponent } from './factura/factura.component';
import { IncidenciasComponent } from './incidencias/incidencias.component';
import { UsuarioLoggeado } from "./models/usuarioLoggeado.service";
import { UsuarioComponent } from './usuario/usuario.component';
import { SqlActas } from "./sql/sql.actas.service";
import { SqlUsuario } from "./sql/sql.usuario.service";
import { ActaDesplegadaComponent } from './actas/acta-desplegada/acta-desplegada.component';
import { ActaDesplegada } from "./models/acta-desplegada.service";
import { SqlFactura } from "./sql/sq.factura.service";
import { FacturaDesplegadaComponent } from './factura/factura-desplegada/factura-desplegada.component';
import { FacturaDesplegada } from "./models/factura-desplegada.service";
import { SqlIncidencia } from "./sql/sql.incidencia.service";
import { SqlNoticias } from "./sql/sql.noticias.service";
import { NoticiaComponent } from './noticia/noticia.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdminActaComponent } from './administrador/admin-acta/admin-acta.component';
import { AdminFacturaComponent } from './administrador/admin-factura/admin-factura.component';
import { AdminIncidenciaComponent } from './administrador/admin-incidencia/admin-incidencia.component';
import { AdminUsuarioComponent } from './administrador/admin-usuario/admin-usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    PanelUsuarioComponent,
    ActasComponent,
    FacturaComponent,
    IncidenciasComponent,
    UsuarioComponent,
    ActaDesplegadaComponent,
    FacturaDesplegadaComponent,
    NoticiaComponent,
    AdministradorComponent,
    AdminActaComponent,
    AdminFacturaComponent,
    AdminIncidenciaComponent,
    AdminUsuarioComponent
  ],
  imports: [
    MatIconModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTooltipModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoute,
    ToastrModule.forRoot()
  ],
  providers: [SqlNoticias, SqlIncidencia, SqlQuerys, SqlActas, SqlUsuario, SqlFactura, ModeloLoggin, UsuarioLoggeado, ActaDesplegada, FacturaDesplegada],
  bootstrap: [AppComponent]
})
export class AppModule { }
