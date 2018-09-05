import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ToastrModule } from 'ngx-toastr';

import { MatTooltipModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';

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
    FacturaDesplegadaComponent
  ],
  imports: [
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
  providers: [SqlQuerys, SqlActas, SqlUsuario, SqlFactura, ModeloLoggin, UsuarioLoggeado, ActaDesplegada, FacturaDesplegada],
  bootstrap: [AppComponent]
})
export class AppModule { }
