import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['../app.component.scss', './navigation.component.scss']
})
export class NavigationComponent {
  menuIsOpen: boolean = false;
  scrollOptions: {} = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  }

  constructor() { }

  scrollToAboutSection() {
    document.getElementById('about-section')!.scrollIntoView(this.scrollOptions);
  }

  scrollToSkillsSection() {
    document.getElementById('skills')!.scrollIntoView(this.scrollOptions);
  }

  scrollToProjectSection() {
    document.getElementById('projects')!.scrollIntoView(this.scrollOptions);
  }

  scrollToContactSection() {
    document.getElementById('contact')!.scrollIntoView(this.scrollOptions);
  }


  openResponsiveMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    let responsiveMenu = document.getElementById('responsive-menu');

    if (this.menuIsOpen) {
      responsiveMenu!.style.opacity = '1';
      responsiveMenu!.style.zIndex = '1000';
    } else {
      responsiveMenu!.style.opacity = '0';
      responsiveMenu!.style.zIndex = '-100';
    }
  }



}
