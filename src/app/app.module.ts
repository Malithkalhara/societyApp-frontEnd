import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { RegformComponent } from './regform/regform.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { SocietyComponent } from './society/society.component';
import { NavsocComponent } from './navsoc/navsoc.component';
import { FootersocComponent } from './footersoc/footersoc.component';
import { SocietiesComponent } from './societies/societies.component';
import { AddsocComponent } from './addsoc/addsoc.component';
import { AboutsocComponent } from './aboutsoc/aboutsoc.component';
import { ActivitiesComponent } from './activities/activities.component';


const routes: Routes = [
  
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'aboutsoc',
    component: AboutsocComponent
  },
  {
    path:'addsoc',
    component: AddsocComponent
  },
  {
    path:'activities',
    component: ActivitiesComponent
  },
  {
    path:'society',
    component: SocietyComponent
  },
  {
    path:'societies',
    component: SocietiesComponent 
  },
  {
    path:'regform',
    component: RegformComponent
  },
  {
    path:'student-info',
    component: StudentInfoComponent
  },
  {
    path:'home',
    component: HomeComponent
  } ,
  { path: '**',
   redirectTo: 'home' 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    StudentInfoComponent,
    RegformComponent,
    LoginComponent,
    SocietyComponent,
    NavsocComponent,
    FootersocComponent,
    SocietiesComponent,
    AddsocComponent,
    AboutsocComponent,
    ActivitiesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
