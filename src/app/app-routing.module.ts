import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import { WeatherComponent } from './weather/weather.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
