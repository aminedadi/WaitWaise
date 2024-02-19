import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'main-page', component : MainPageComponent},
  { path:'dashbord', component : DashbordComponent},
  { path:'page-not-found' , component : PageNotFoundComponent},
  { path:'', redirectTo: './main-page', pathMatch: 'full' },
  { path:'**', redirectTo: './page-not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
