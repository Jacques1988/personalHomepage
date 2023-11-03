import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  menuIsOpen: boolean = false;


  openResponsiveMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    let responsiveMenu = document.getElementById('responsive-menu');

    if (this.menuIsOpen) {
      responsiveMenu!.style.opacity = '1';
      responsiveMenu!.style.zIndex = '10';
    } else {
      responsiveMenu!.style.opacity = '0';
      responsiveMenu!.style.zIndex = '-100';
    }

    console.log(this.menuIsOpen)
  }
}
