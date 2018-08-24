import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http"

import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';
import { AppRoute } from './app.route';
import { SqlQuerys } from "./sql/sql.loggin.service";
import { ModeloLoggin } from "./models/loggin.model";
import { PanelUsuarioComponent } from './panel-usuario/panel-usuario.component';
import { ActasComponent } from './actas/actas.component';
import { FacturaComponent } from './factura/factura.component';
import { IncidenciasComponent } from './incidencias/incidencias.component';
import { PersonalComponent } from './personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    PanelUsuarioComponent,
    ActasComponent,
    FacturaComponent,
    IncidenciasComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoute,
    ToastrModule.forRoot()
  ],
  providers: [SqlQuerys,ModeloLoggin],
  bootstrap: [AppComponent]
})
export class AppModule { }
