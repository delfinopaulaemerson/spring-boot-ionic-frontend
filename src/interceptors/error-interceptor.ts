import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from "rxjs";
import { StorageService } from "../services/storage.services";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(public storage: StorageService) {
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let localUser = this.storage.getLocalUser();
        
        if (localUser) {
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)});
            return next.handle(authReq)
        }else{
            console.log('Teste interceptor');
            return next.handle(req)
            .catch((error, caught) => {
                let errorObj = error;
                if (errorObj.error) {
                    errorObj = errorObj.error;
                }
                if(!errorObj.status){
                   errorObj = JSON.parse(errorObj);     
                }
    
                console.log("Erro detectado pelo Interceptors:");
                console.log(errorObj);
                return Observable.throw(errorObj);        
            }) as any;
        }

       
    }
 
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};