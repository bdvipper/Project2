import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes:Routes=[
  {path:'home-page', component: HomePageComponent},
  {path:'landingpage', component: LandingpageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HomePageComponent
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
