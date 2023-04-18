import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDeteilsComponent } from './components/country-deteils/country-deteils.component';
import { CountryComponent } from './components/country/country.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'base'},
  {path:'base', component: CountryComponent},
  {path:'base/about', component: AboutComponent},
  {path:'base/:country', component: CountryDeteilsComponent},
  {path:'base/:country/:info', component: CountryInfoComponent},
  {path:'**', component: CountryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
