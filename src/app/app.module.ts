import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './components/search/search.module';
import { WeatherModule } from './pages/weather/weather.module';
import { NavModule } from './components/nav/nav.module';
import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './components/services/auth.service';
import { ModalService } from './components/services/modal.service';
import { RouterModule } from '@angular/router';
import { defaultSimpleModalOptions, SimpleModalModule } from 'ngx-simple-modal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NavModule,
    SearchModule,
    WeatherModule,
    LoginModule,
    RegisterModule,
    FormsModule,
    SimpleModalModule.forRoot({ container: 'modal-container' }, {
      ...defaultSimpleModalOptions, ...{
        closeOnEscape: true,
        closeOnClickOutside: true,
        wrapperDefaultClasses: 'o-modal o-modal--fade',
        wrapperClass: 'o-modal--fade-in',
        animationDuration: 300,
        autoFocus: true,
        draggable: true
      }
    }) 
  ],
  providers: [
    ModalService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
