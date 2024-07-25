import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyDataService } from 'src/app/services/dummy-data.service';
import { User } from 'src/app/services/user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  user!: User;

  constructor(private dummyDataService: DummyDataService, private route:ActivatedRoute){

  }

  ngOnInit(){
    this.user = this.dummyDataService.getUser();
  }

}
