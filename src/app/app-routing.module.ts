import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirqualityComponent } from './airquality/airquality.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
