import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherModule } from '@app/pages/weather/weather.module';
import { SearchModule } from '../search/search.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    WeatherModule,
    SearchModule,
    HttpClientModule
  ]
})
export class HomeModule { }
