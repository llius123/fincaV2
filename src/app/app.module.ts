import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ToastrModule } from 'ngx-toastr';


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

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    PanelUsuarioComponent,
    ActasComponent,
    FacturaComponent,
    IncidenciasComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoute,
    ToastrModule.forRoot()
  ],
  providers: [SqlQuerys,ModeloLoggin,UsuarioLoggeado],
  bootstrap: [AppComponent]
})
export class AppModule { }
