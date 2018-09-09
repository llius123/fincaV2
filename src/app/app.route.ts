import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { LogginComponent } from './loggin/loggin.component';
import { PanelUsuarioComponent } from './panel-usuario/panel-usuario.component';
import { ActasComponent } from './actas/actas.component';
import { FacturaComponent } from './factura/factura.component';
import { IncidenciasComponent } from './incidencias/incidencias.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ActaDesplegadaComponent } from './actas/acta-desplegada/acta-desplegada.component';
import { FacturaDesplegadaComponent } from './factura/factura-desplegada/factura-desplegada.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdminActaComponent } from './administrador/admin-acta/admin-acta.component';
import { AdminFacturaComponent } from './administrador/admin-factura/admin-factura.component';
import { AdminIncidenciaComponent } from './administrador/admin-incidencia/admin-incidencia.component';
import { AdminUsuarioComponent } from './administrador/admin-usuario/admin-usuario.component';



const appRoutes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: 'login', component: LogginComponent },
    {
        path: 'panel-personal', component: PanelUsuarioComponent, children: [
            { path: 'noticias', component: NoticiaComponent},
            { path: 'actas', component: ActasComponent },
            { path: 'facturas', component: FacturaComponent },
            { path: 'incidencias', component: IncidenciasComponent },
            { path: 'panel_personal', component: UsuarioComponent },
            { path: 'actas/acta-desplegada', component: ActaDesplegadaComponent},
            { path: 'facturas/factura-desplegada', component: FacturaDesplegadaComponent},
            { path: 'administrador', component: AdministradorComponent},
            { path: 'administrador/acta/:accion', component: AdminActaComponent},
            { path: 'administrador/factura/:accion', component: AdminFacturaComponent },
            { path: 'administrador/incidencia/:accion', component: AdminIncidenciaComponent },
            { path: 'administrador/usuario/:accion', component: AdminUsuarioComponent }
        ]
    },
    { path: "**", redirectTo: "/login" }

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoute { }