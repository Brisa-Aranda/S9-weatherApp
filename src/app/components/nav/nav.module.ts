import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
