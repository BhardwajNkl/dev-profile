import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyDataService } from 'src/app/services/dummy-data.service';
import { Project } from 'src/app/services/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[]=[];
  
  constructor(private dummyDataService: DummyDataService, private route:ActivatedRoute){

  }

  ngOnInit(){
    this.projects = this.dummyDataService.getProjects();
  }
  
}
