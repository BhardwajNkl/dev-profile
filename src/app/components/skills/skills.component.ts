import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyDataService } from 'src/app/services/dummy-data.service';
import { Skill } from 'src/app/services/skill';
import { SkillFilter } from 'src/app/services/skill-filter';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[]=[];
  skillFilters: SkillFilter[]=[];
  skillToDisplay:Skill[]=[];
  activeFilter:string="Favourites";

  constructor(private dummyDataService: DummyDataService, private route:ActivatedRoute){

  }

  ngOnInit(){
    this.skills = this.dummyDataService.getSkills();
    this.skillFilters = this.dummyDataService.getSkillFilters();
    this.filterSkills(this.activeFilter);
  }

  filterSkills(filter:string){
    // make this filter active
    this.activeFilter=filter;
    this.skillToDisplay=this.skills.filter(skill=>{ return skill.category.some(item=>item.toLowerCase()==filter.toLowerCase())});

  }
  
}
