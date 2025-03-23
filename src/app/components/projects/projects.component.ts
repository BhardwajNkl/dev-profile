import { Component } from '@angular/core';
import { DummyDataService } from 'src/app/services/dummy-data.service';
import { Project } from 'src/app/services/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[]=[];
  
  constructor(private dummyDataService: DummyDataService){
  }

  ngOnInit(){
    this.projects = this.dummyDataService.getProjects();
  }
  
}
