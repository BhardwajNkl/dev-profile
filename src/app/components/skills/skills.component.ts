import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/services/skill';
import { SkillFilter } from 'src/app/services/skill-filter';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() skills: Skill[]=[];
  @Input() skillFilters: SkillFilter[]=[];
  skillToDisplay:Skill[]=[];
  activeFilter:string="Programming";

  constructor(){

  }

  ngOnInit(){
    this.skillToDisplay = this.skills;
  }

  filterSkills(filter:string){
    // make this filter active
    this.activeFilter=filter;
    
    if(filter.toLocaleLowerCase()=="all"){
      this.skillToDisplay=this.skills;
    } else{
      this.skillToDisplay=this.skills.filter(skill=>{ return skill.category.some(item=>item.toLowerCase()==filter.toLowerCase())});
    }

  }
  
}
