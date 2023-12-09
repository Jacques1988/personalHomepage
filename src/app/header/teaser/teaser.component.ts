import { Component, OnInit } from '@angular/core';
import { WelcomeTeaserComponent } from './welcome-teaser/welcome-teaser.component';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})
export class TeaserComponent implements OnInit {

  ngOnInit(): void {
    let welcomeHeader = new WelcomeTeaserComponent(document.querySelector('#canvas-teaser')!, document.querySelector('.teaser-container')!);
  }


}
