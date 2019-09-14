import { CidadeDTO } from './../models/cidade.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CidadeService{

    constructor(public htttp:HttpClient){}


    public findCidades(estado_id: string): Observable<CidadeDTO[]>{

        return this.htttp.get<CidadeDTO[]>('http://localhost:8080/estados/'+estado_id+'/cidades');
    }

   
}