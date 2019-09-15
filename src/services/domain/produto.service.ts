import { ProdutoDTO } from './../../models/produto.dto';
import { StorageService } from './../storage.services';
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable()
export class ProdutoService{

    constructor(public http: HttpClient,public storage: StorageService){}
   

    public findByCategoria(categoria_id: string,page: number=0,linesPorPage: number=24 ){
        let token = this.storage.getLocalUser().token;
        let authHeaders = new HttpHeaders({'Authorization': 'Bearer ' + token});
        return this.http.get('http://localhost:8080/produtos?categorias='+categoria_id+'&page='+page+'&linesPorPage='+linesPorPage,{'headers': authHeaders});
    }

    public findById(produto_id: string){
        let token = this.storage.getLocalUser().token;
        let authHeaders = new HttpHeaders({'Authorization': 'Bearer ' + token});
        return this.http.get<ProdutoDTO>('http://localhost:8080/produtos/'+produto_id,{'headers': authHeaders});
    }

    

}