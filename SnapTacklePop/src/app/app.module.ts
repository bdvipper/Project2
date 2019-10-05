import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Landingpage2Component } from './landingpage2/landingpage2.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TeamSelectedComponent} from './home-page/team-selected.component';
import { AuthInterceptor } from './home-page/authentication.interceptor';


const appRoutes:Routes=[
  {path:'home-page', component: HomePageComponent},
  {path:'landingpage', component: LandingpageComponent},
  {path:'landingpage2', component: Landingpage2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HomePageComponent,
    TeamSelectedComponent,
    Landingpage2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  entryComponents: [TeamSelectedComponent],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
