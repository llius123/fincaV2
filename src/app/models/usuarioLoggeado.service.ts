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

    //Es admin el usuario
    admin(): boolean{
        if(this.user.administrador === 'S'){
            return true;
        }else{
            return false;
        }
    }

    //Desconectarse
    desconectarse() {
        this.user = null;
    }
    
    getUser(){
        return this.user;
    }
}