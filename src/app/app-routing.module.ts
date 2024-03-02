import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { QueueManagementComponent } from './company-pages/queue-management/queue-management.component';
import { companyGuard } from './Guards/companyGuard.guard';
import { JwtHelperService } from '@auth0/angular-jwt';
import { clientGuard } from './Guards/client-guard.guard';

const routes: Routes = [
  
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'main-page', component : MainPageComponent},
  { path:'home', component : MainPageComponent},
  { path:'dashbord', component : DashbordComponent, canActivate: [companyGuard]},
  { path:'about', component : AboutPageComponent, canActivate: [clientGuard]},
  { path:'queue-management', component : QueueManagementComponent},
  { path:'page-not-found' , component : PageNotFoundComponent},
  { path:'', redirectTo: './main-page', pathMatch: 'full' },
  { path:'**', redirectTo: './page-not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
