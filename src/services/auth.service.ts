import { StorageService } from './storage.services';
import { LocalUser } from './../models/local_user';
import { CredenciaisDTO } from './../models/credenciais.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService{

    jwtHelper: JwtHelper = new JwtHelper();

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
            token :tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    }

    logouth(){
        this.storage.setLocalUser(null);
    }
}