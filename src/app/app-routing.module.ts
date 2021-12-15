import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSeanceComponent } from './components/add-seance/add-seance.component';
import { AddTarComponent } from './components/add-tar/add-tar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SeanceComponent } from './components/seance/seance.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentComponent } from './components/student/student.component';
import { TarComponent } from './components/tar/tar.component';
import { TeacherComponent } from './components/teacher/teacher.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'student',component:StudentComponent},
  {path:'seance',children:[
    {path:'',component:SeanceComponent},
    {path:'addseance',component:AddSeanceComponent}
  ]},
  {path:'tar',children:[
    {path:'',component:TarComponent},
    {path:'addtar',component:AddTarComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
