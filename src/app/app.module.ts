import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';
 

import { AppRoutingModule } from './app-routing.module';


import { MainPageComponent } from './components/main-page/main-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';








 

/* import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'; */

/* const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} }; */

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainPageComponent,
        PageNotFoundComponent,
        HttpClientModule,
        NavBarComponent,
        BrowserAnimationsModule,
        
      /* SocketIoModule.forRoot(config), */  
    ],
    bootstrap:[AppComponent],
    providers:[HttpClient]
})
export class AppModule { }
