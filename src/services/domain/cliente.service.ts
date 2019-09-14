import { StorageService } from './../storage.services';
import { ClienteDTO } from './../../models/cliente.dto';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ClienteService{

    constructor(public http:HttpClient, public storage: StorageService){}

    findByEmail(email:string) : Observable<ClienteDTO>{
        let token = this.storage.getLocalUser().token;
        let authHeaders = new HttpHeaders({'Authorization': 'Bearer ' + token});
        return this.http.get<ClienteDTO>('http://localhost:8080/clientes/email?value='+email,{'headers': authHeaders});
    }
}