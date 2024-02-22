import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DailyBitesPageComponent } from './pages/daily-bites-page/daily-bites-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path:"",
    component:ProfileComponent
  },
  {
    path:"daily-bites",
    component:DailyBitesPageComponent
  },
  {
    path:"admin",
    component:AdminPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
