import { Component, OnInit } from '@angular/core';
import { sizes } from './sizes';
import * as THREE from 'three';

@Component({
  selector: 'app-welcome-teaser',
  templateUrl: './welcome-teaser.component.html',
  styleUrls: ['./welcome-teaser.component.scss']
})


export class WelcomeTeaserComponent {
  renderer: THREE.WebGLRenderer;
  sizes: sizes;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene = new THREE.Scene();
  clock: THREE.Clock = new THREE.Clock();
  light: THREE.AmbientLight = new THREE.AmbientLight(0xffffff, 0.7);



  constructor(private canvas: HTMLCanvasElement, private canvasContainer: HTMLElement) {
    this.canvas = canvas;
    this.canvasContainer = canvasContainer;
    this.sizes = {
      width: this.canvasContainer.clientWidth,
      height: this.canvasContainer.clientHeight,
      aspect: this.canvasContainer.clientWidth / this.canvasContainer.clientHeight,
    }
    this.camera = new THREE.PerspectiveCamera(75, this.sizes.aspect, 0.01, 1000);
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
    });
    this.settings();
  }


  settings() {
    this.canvas.width = this.sizes.width;
    this.canvas.height = this.sizes.height;
    this.camera.position.z = 3;
    this.scene.add(
      this.camera,
      this.light,
    );

    this.renderer.setSize(
      this.sizes.width,
      this.sizes.height
    );

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.startScreen();
  }



  startScreen = () => {
    let elapsedTime = this.clock.getElapsedTime();

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.startScreen)
  }
}
