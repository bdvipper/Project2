import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Landingpage2Component } from './landingpage2/landingpage2.component';

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
    Landingpage2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
