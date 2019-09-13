import { ClienteDTO } from './../../models/cliente.dto';
import { HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ClienteService{

    constructor(public http:HttpClient){}

    findByEmail(email:string) : Observable<ClienteDTO>{
        return this.http.get<ClienteDTO>('http://localhost:8080/clientes/email?value='+email);
    }
}