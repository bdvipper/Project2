import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TeamSelectedComponent } from './home-page/team-selected.component';

const routes:Routes=[
  {path:'hope-page', component : HomePageComponent },
  {path:'[(team.name)]', component : TeamSelectedComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
