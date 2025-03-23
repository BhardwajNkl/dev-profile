import { Component } from '@angular/core';
import { DummyDataService } from 'src/app/services/dummy-data.service';
import { Skill } from 'src/app/services/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[]=[];

  constructor(private dummyDataService: DummyDataService){
  }

  ngOnInit(){
    this.skills = this.dummyDataService.getSkills();
  }
}
