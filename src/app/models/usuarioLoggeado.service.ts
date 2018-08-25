import { ModeloUsuario } from "./model.service";
import { Injectable } from "@angular/core";

 
@Injectable()
export class UsuarioLoggeado {
    user: ModeloUsuario

    //Guardar datos
    usuarioLoggeadoSave(user: ModeloUsuario) {
        this.user = user;
        return user;
    }

    //Metodo que devuelve si el usuario esta logeado o no
    loggeado(): boolean{
        if(this.user === undefined){
            return false;
        }else{
            return true;
        }
    }

    getUser(){
        return this.user;
    }
}