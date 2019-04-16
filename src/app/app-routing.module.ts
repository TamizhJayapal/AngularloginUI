import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TutoappComponent } from './tutoapp/tutoapp.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, pathMatch: 'full',
    children : [
      {
        path: 'tutoapp' , component: TutoappComponent
      }
    ]
  },
  {
    path: 'tutoapp' , component: TutoappComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
