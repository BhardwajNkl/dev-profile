import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

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
