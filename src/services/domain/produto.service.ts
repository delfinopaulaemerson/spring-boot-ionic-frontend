import { StorageService } from './../storage.services';
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable()
export class ProdutoService{

    constructor(public http: HttpClient,public storage: StorageService){}
   

    public findByCategoria(categoria_id){
        let token = this.storage.getLocalUser().token;
        let authHeaders = new HttpHeaders({'Authorization': 'Bearer ' + token});
        return this.http.get('http://localhost:8080/produtos?categorias='+categoria_id,{'headers': authHeaders});
    }

}