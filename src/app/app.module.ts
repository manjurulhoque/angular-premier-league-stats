import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StandingsPageComponent } from './pages/standings-page/standings-page.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        StandingsPageComponent,

        NavbarComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
