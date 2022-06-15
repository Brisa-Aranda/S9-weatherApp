import { Component } from '@angular/core';
import { WeatherService } from '@app/pages/weather/services/weather.service';
import { WeatherData } from '@app/shared/interfaces/weather.interface';
import { GeoLocationService } from '@app/shared/services/geo-location.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public weather$!: Observable<WeatherData>;
  constructor(
    private readonly weatherSvc: WeatherService,
    private readonly geoLocationSvc: GeoLocationService
   
   ) {
     //el if es para detectar qué navegador permite geolocalización
     if (navigator?.geolocation) {
          this.getLocation();
     }
 
   }
 
   public onSearch(city:string):void {
    this.weather$ = this.weatherSvc.getWeatherByName(city);
   }
 
   private async getLocation(): Promise<void> {
     try {
       const { coords } = await this.geoLocationSvc.getCurrentPosition();
       this.weather$ = this.weatherSvc.getWeatherByCoords(coords);
     } catch (error) {
       console.log(error);
     }
   }
}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} -> por nombre
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} -> por geolocalización
