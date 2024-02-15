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
  constructor(){

  }

  ngOnInit(){
    
  }
}
