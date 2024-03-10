import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  activeLink:string='about';
  updateActiveLink(activeLink:string){
    this.activeLink=activeLink;
  }
}
