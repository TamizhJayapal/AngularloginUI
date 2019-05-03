import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StudentsComponent } from './students/students.component';
import { MessageComponent } from './message/message.component';
import { SettingComponent } from './setting/setting.component';

const routs: Router = [
    {
        path: '' , redirectTo: 'profile', pathMatch: 'full'
    }
]