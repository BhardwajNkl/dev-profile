import { Component, Input } from '@angular/core';
import { Project } from 'src/app/services/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input() projects: Project[]=[];
  constructor(){

  }

  ngOnInit(){
    
  }
}
