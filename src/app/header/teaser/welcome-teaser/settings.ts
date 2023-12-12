import * as THREE from 'three';
import { sizes } from './sizes';
import { Teaser } from './teaser';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


export class WelcomeTeaser {
  renderer: THREE.WebGLRenderer;
  sizes: sizes;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene = new THREE.Scene();
  clock: THREE.Clock = new THREE.Clock();
  light: THREE.AmbientLight = new THREE.AmbientLight(0xffffff, 0.7);
  sunLight = new THREE.PointLight(0xffffff, 1000)
  teaser: Teaser = new Teaser();
  controls: OrbitControls;

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
    this.controls = new OrbitControls(this.camera, this.canvas)

    this.teaser.loadFont(this.scene);
    this.settings();
    this.scene.add(
      this.camera,
      this.light,
      this.sunLight,
    );
  }

  settings() {
    this.canvas.width = this.sizes.width;
    this.canvas.height = this.sizes.height;
    this.camera.position.z = 5;
    this.sunLight.position.set(10, 10, 10);
    this.renderer.setSize(
      this.sizes.width,
      this.sizes.height
    );

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.startScreen();
  }

  startScreen = () => {
    let elapsedTime = this.clock.getElapsedTime();
    console.log(elapsedTime);
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.startScreen)
  }
}








/* buildTeaser() {
    
  } */