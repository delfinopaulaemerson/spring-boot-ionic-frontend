import { StorageService } from './storage.services';
import { LocalUser } from './../models/local_user';
import { CredenciaisDTO } from './../models/credenciais.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService{

    constructor(public http: HttpClient, public storage:  StorageService){}
    public auyhenticate(creds : CredenciaisDTO){
        return this.http.post('http://localhost:8080/login',creds,{
            observe:'response',
            responseType:'text'
        });
    }


    sucessFullLogin(authorizationValue :string){
        let tok = authorizationValue.substring(7);
        let user : LocalUser  = {
            token :tok
        };
        this.storage.setLocalUser(user);
    }

    logouth(){
        this.storage.setLocalUser(null);
    }
}