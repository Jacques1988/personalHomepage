import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['../app.component.scss', './projects.component.scss']
})
export class ProjectsComponent {
  projectImages: string[] = [
    '../../assets/img/html.png',
    '../../assets/img/css.png',
    '../../assets/img/JavaScript.png',
  ]
  currentImage = 0;

  onClickForward() {
    this.currentImage++;
    if (this.currentImage > this.projectImages.length - 1) {
      this.currentImage = 0;
    }
  }

  onClickBackward() {
    this.currentImage--;
    if (this.currentImage < 0) {
      this.currentImage = this.projectImages.length - 1;
    }
  }
}

