import { CartPage } from './../pages/cart/cart';
import { CartService } from './../services/domain/cart.service';
import { ProdutodetailPage } from './../pages/produtodetail/produtodetail';
import { ProdutoService } from './../services/domain/produto.service';
import { ProdutosPage } from './../pages/produtos/produtos';
import { CidadeService } from './../services/cidade.service';
import { LogoutPage } from './../pages/logout/logout';
//import { AuthenticationInterceptorProvider } from './../interceptors/auth-interceptor';
import { ProfilePage } from './../pages/profile/profile';
import { ClienteService } from './../services/domain/cliente.service';
import { StorageService } from './../services/storage.services';
import { AuthService } from './../services/auth.service';
import { ErrorInterceptorProvider } from './../interceptors/error-interceptor';
import { CategoriasPage } from './../pages/categorias/categorias';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaService } from '../services/domain/categoria.service';
import { SignupPage } from '../pages/signup/signup';
import { EstadoService } from '../services/domain/estado.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogoutPage,
    CategoriasPage,
    ProfilePage,
    SignupPage,
    ProdutosPage,
    ProdutodetailPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogoutPage,
     CategoriasPage,
     ProfilePage,
     SignupPage,
     ProdutosPage,
     ProdutodetailPage,
     CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoriaService,
    //AuthenticationInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    StorageService,
    ClienteService,
    CidadeService,
    EstadoService,
    ProdutoService,
    CartService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
