import { StorageService } from './../storage.services';
import { PedidoDTO } from './../../models/pedido.dto';

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class PedidoService{
    str:string;
    constructor(public http: HttpClient, public storage: StorageService){}


    insert(obj:PedidoDTO):string{
        let token = this.storage.getLocalUser().token;
        let authHeaders = new HttpHeaders({'Authorization': 'Bearer ' + token});
        this.http.post('http://localhost:8080/pedidos',obj,{
            'headers': authHeaders,
            observe: 'response',
            responseType: 'text'
        }).subscribe(response=>{
            this.str = response.headers.get('location');
        });
           
       return  this.str;
    }
    
    insertStandAlone(obj: PedidoDTO) {
        let token = this.storage.getLocalUser().token;
        let authHeaders = new HttpHeaders({'Authorization': 'Bearer ' + token});
        return this.http.post('http://localhost:8080/pedidos',obj,{
            'headers': authHeaders,
            observe: 'response',
            responseType: 'text'
        });
    }
}