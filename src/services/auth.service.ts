import { CredenciaisDTO } from './../models/credenciais.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService{

    constructor(public http: HttpClient){}
    public auyhenticate(creds : CredenciaisDTO){
        return this.http.post('http://localhost:8080/login',creds,{
            observe:'response',
            responseType:'text'
        });
    }

}