import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SeanceComponent } from './components/seance/seance.component';
import { AddSeanceComponent } from './components/add-seance/add-seance.component';
import { TarComponent } from './components/tar/tar.component';
import { AddTarComponent } from './components/add-tar/add-tar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TeacherComponent,
    StudentComponent,
    NavbarComponent,
    SeanceComponent,
    AddSeanceComponent,
    TarComponent,
    AddTarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
