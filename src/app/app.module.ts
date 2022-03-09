import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';
import { SomethingElseComponent } from './components/something-else/something-else.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsDetailsComponent,
    SomethingElseComponent,
    LoginComponent,
    AdminComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
