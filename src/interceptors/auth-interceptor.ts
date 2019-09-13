import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from "rxjs";
import { StorageService } from "../services/storage.services";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    constructor(public storage: StorageService) {
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let localUser = this.storage.getLocalUser();
        
        if (localUser) {
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)});
            if(localUser){
                return next.handle(authReq);
            }
            return next.handle(req);
        }
    }

 
    
}

export const AuthenticationInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
};