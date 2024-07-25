import { Component, Input } from '@angular/core';
import { User } from 'src/app/services/user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() user!:User;

  constructor(){

  }

  ngOnInit(){
    
  }

  sendMessage(){
    alert("This feature is not enabled yet! Please connect on LinkedIn.")
  }
}
