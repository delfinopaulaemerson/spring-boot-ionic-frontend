import { StorageService } from './../storage.services';
import { ClienteDTO } from './../../models/cliente.dto';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ClienteService{

    data: any;

    constructor(public http:HttpClient, public storage: StorageService){}

    findByEmail(email:string){
        let token = this.storage.getLocalUser().token;
        let authHeaders = new HttpHeaders({'Authorization': 'Bearer ' + token});
        return this.http.get('http://localhost:8080/clientes/email?value='+email,{'headers': authHeaders});
    }

    insert(obj: ClienteDTO){
        this.http.post('http://localhost:8080/clientes',obj, {
            observe: 'response',
            responseType: 'text'
        });

    }
    
    insertMap(obj: ClienteDTO):Observable<any>{
       return  this.http.post('http://localhost:8080/clientes',obj).map((result: Response)=>result.json());
    }

    insertSusbscribe(obj: ClienteDTO){
        this.http.post('http://localhost:8080/clientes',obj).subscribe(response => {
            console.log(response);
        },
        error =>{
            console.log("Erro http Post");
        });
    }
}