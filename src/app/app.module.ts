import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostloginModule } from './postlogin/postlogin.module';
import { PreloginModule } from './prelogin/prelogin.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LottieModule } from 'ngx-lottie';  

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ModalModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),
    BrowserModule,
    AppRoutingModule,
    PostloginModule,
    PreloginModule,
    ReactiveFormsModule,
    HttpClientModule,
    LottieModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
