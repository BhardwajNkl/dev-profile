import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyDataService } from 'src/app/services/dummy-data.service';
import { Project } from 'src/app/services/project';
import { Skill } from 'src/app/services/skill';
import { SkillFilter } from 'src/app/services/skill-filter';
import { User } from 'src/app/services/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user!: User;
  skills!:Skill[]
  projects!:Project[]
  skillFilters!:SkillFilter[]

  constructor(private dummyDataService: DummyDataService, private route:ActivatedRoute){

  }

  ngOnInit(){
    this.user = this.dummyDataService.getUser();
    this.skills = this.dummyDataService.getSkills();
    this.projects = this.dummyDataService.getProjects();
    this.skillFilters = this.dummyDataService.getSkillFilters();
  }

  ngAfterViewInit(){
    // get fragment and scroll to the desired section
    this.route.fragment.subscribe((fragment:string|null)=>{
      if(fragment){
        document.getElementById(fragment)?.scrollIntoView({behavior:"smooth"})
      }
    });
  }
}
