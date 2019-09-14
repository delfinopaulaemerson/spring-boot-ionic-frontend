import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import { EstadoDTO } from "../../models/estado.dto";

@Injectable()
export class EstadoService{

    constructor(public htttp:HttpClient){}


    public findEstados(): Observable<EstadoDTO[]>{

        return this.htttp.get<EstadoDTO[]>('http://localhost:8080/estados/');
    }

   
}