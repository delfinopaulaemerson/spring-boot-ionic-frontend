import { CategriaDTO } from './../../models/categoria.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriaService{

    constructor(public htttp:HttpClient){}


    public findAll(): Observable<CategriaDTO[]>{

        return this.htttp.get<CategriaDTO[]>('http://localhost:8080/categorias');
    }
}