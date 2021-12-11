import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './postlogin/dashboard/dashboard.component';
import { LoginComponent } from './prelogin/login/login.component';
import { RegisterComponent } from './prelogin/register/register.component';

/**
 * Delclared all necessary routin here , here we can add canactive property for authGaurd funtionality
 */
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
