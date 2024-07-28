import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    redirectTo:"about"
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"skills",
    component:SkillsComponent
  },
  {
    path:"projects",
    component:ProjectsComponent
  },
  // {
  //   path:"contact",
  //   component:ContactComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
