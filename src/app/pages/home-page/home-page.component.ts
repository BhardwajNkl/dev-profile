import { Component } from '@angular/core';
import { User } from 'src/app/services/user';
import { DummyDataService } from 'src/app/services/dummy-data.service';
import { Skill } from 'src/app/services/skill';
import { Project } from 'src/app/services/project';
import { SkillFilter } from 'src/app/services/skill-filter';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  user!: User;
  skills!:Skill[]
  projects!:Project[]
  skillFilters!:SkillFilter[]

  constructor(private dummyDataService: DummyDataService){

  }

  ngOnInit(){
    this.user = this.dummyDataService.getUser();
    this.skills = this.dummyDataService.getSkills();
    this.projects = this.dummyDataService.getProjects();
    this.skillFilters = this.dummyDataService.getSkillFilters();
  }
}
