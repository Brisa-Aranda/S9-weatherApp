import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'weather', loadChildren: () => import('./pages/weather/weather.module').then(m => m.WeatherModule) 
},
{
  path: 'welcome',
  loadChildren: () => import('../app/components/welcome/welcome.module').then( m => m.WelcomeModule)
},
{
  path: 'home',
  loadChildren: () => import('../app/components/home/home.module').then( m => m.HomeModule)
},
{
  path: 'login',
  loadChildren: () => import('../app/components/login/login.module').then( m => m.LoginModule)
},
{
  path: 'register',
  loadChildren: () => import('../app/components/register/register.module').then( m => m.RegisterModule)
},
{
  path: '**',
  redirectTo: 'welcome'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
