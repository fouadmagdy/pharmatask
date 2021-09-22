import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { LoginComponent } from './login/login.component';
import { CreateCountryComponent } from './create-country/create-country.component';
import { EditCountryComponent } from './edit-country/edit-country.component';
import { CityListComponent } from './city-list/city-list.component';
import { CreateCityComponent } from './create-city/create-city.component';
import { EditCityComponent } from './edit-city/edit-city.component';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'country', component: CountryListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateCountryComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditCountryComponent, canActivate: [AuthGuard] },
  { path: 'city/:countryId', component: CityListComponent, canActivate: [AuthGuard] },
  { path: 'createcity/:countryId', component: CreateCityComponent, canActivate: [AuthGuard] },
  { path: 'editcity/:cityId', component: EditCityComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
