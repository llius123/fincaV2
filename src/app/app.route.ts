import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { LogginComponent } from './loggin/loggin.component';
import { PanelUsuarioComponent } from './panel-usuario/panel-usuario.component';
const appRoutes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full"},
    { path: 'login', component: LogginComponent},
    { path: 'panel-personal', component: PanelUsuarioComponent},
    { path: "**", redirectTo: "/login" }

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoute {}