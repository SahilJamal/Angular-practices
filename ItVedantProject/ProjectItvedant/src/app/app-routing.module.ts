import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentAuthComponent } from './student-auth/student-auth.component';
import { PnfComponent } from './pnf/pnf.component';

const routes: Routes = [
  {path:'',redirectTo:'/auth',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'addstudent',component:AddStudentComponent},
  {path:'auth',component:StudentAuthComponent },
  {path:'**',component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
