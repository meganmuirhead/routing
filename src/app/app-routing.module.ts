import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SomethingElseComponent} from './components/something-else/something-else.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {AdminComponent} from './components/admin/admin.component';
import {NotAuthorizedComponent} from './components/not-authorized/not-authorized.component';
import {StudentsDetailsComponent} from './components/students-details/students-details.component';
import {StudentsComponent} from './components/students/students.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [ AuthGuard ] },
  { path: 'not-authorized/', component: NotAuthorizedComponent },
  { path: 'student', component: StudentsComponent},

  { path: 'student-details/:id', component: StudentsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
