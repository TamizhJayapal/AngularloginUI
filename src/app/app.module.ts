import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { LoginComponent } from './login/login.component';
import { TutoappComponent } from './tutoapp/tutoapp.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './after-login/profile/profile.component';
import { StaffsComponent } from './after-login/staffs/staffs.component';
import { StudentsComponent } from './after-login/students/students.component';
import { MessageComponent } from './after-login/message/message.component';
import { SettingComponent } from './after-login/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TutoappComponent,
    PagenotfoundComponent,
    ProfileComponent,
    StaffsComponent,
    StudentsComponent,
    MessageComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
