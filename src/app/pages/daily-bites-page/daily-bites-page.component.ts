import { Component } from '@angular/core';
import { Bite } from 'src/app/services/bite';
import { DummyDataService } from 'src/app/services/dummy-data.service';
import { BiteService } from 'src/app/services/bite.service';

@Component({
  selector: 'app-daily-bites-page',
  templateUrl: './daily-bites-page.component.html',
  styleUrls: ['./daily-bites-page.component.css']
})
export class DailyBitesPageComponent {
  // 1. when we are working with Bite interface
  // bites!:Bite[];

  // 2. when we are working with any type
  bites:any=[]

  constructor(private dummyDataService : DummyDataService, private biteService: BiteService){

  }

  ngOnInit(){
    // 1. working with built in data using the interface
    // this.bites = this.dummyDataService.getBites();

    // 2. working with actual API data using any type.
    this.biteService.getBites().subscribe(
      data=>{
        console.log(data);
        this.bites = data;
      },
      error=>{
        console.log(error);
      }
    )
  }
}
