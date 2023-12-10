import { Component, OnInit } from '@angular/core';
import { WelcomeTeaser } from './welcome-teaser/settings';


@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})
export class TeaserComponent implements OnInit {

  ngOnInit(): void {
    let welcomeHeader = new WelcomeTeaser(document.querySelector('#canvas-teaser')!, document.querySelector('.teaser-container')!);
  }


}
