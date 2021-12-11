import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}


@NgModule({
  declarations: [
    DashboardComponent
  ],
  
  imports: [
    ModalModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),
    CommonModule,
    ReactiveFormsModule,
    LottieModule
  ],
  exports: [DashboardComponent],
})
export class PostloginModule { }
