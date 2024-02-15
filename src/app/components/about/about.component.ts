import { Component, Input } from '@angular/core';
import { User } from 'src/app/services/user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() user!: User;
  
}
