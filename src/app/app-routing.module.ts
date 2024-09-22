import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirqualityComponent } from './airquality/airquality.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: 'airquality', component: AirqualityComponent},
  {path: 'explore-page', component: ExplorePageComponent},
  {path: 'home-page', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
