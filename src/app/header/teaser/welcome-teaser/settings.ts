import * as THREE from 'three';
import { sizes } from './sizes';
import { Teaser } from './Teaser';
import { Ring } from './Ring';
import { Frame } from './Frame';
import { StyleLoader } from './StyleLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class WelcomeTeaser {
  styleLoader: StyleLoader = new StyleLoader();
  renderer: THREE.WebGLRenderer;
  sizes: sizes;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene = new THREE.Scene();
  clock: THREE.Clock = new THREE.Clock();
  sunLight = new THREE.DirectionalLight(0xffffff, 2)
  teaser: Teaser = new Teaser();
  ring: Ring = new Ring();
  ringSurface: string[] = this.styleLoader.loadRingTextures();
  profileImageFrame = new Frame();
  profileImage: any = this.styleLoader.loadProfileImage();

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
      this.sunLight,
      this.ring.buildRing(this.ringSurface),
      this.profileImageFrame.buildImageFrame(this.profileImage)
    );
  }


  settings() {
    this.canvas.width = this.sizes.width;
    this.canvas.height = this.sizes.height;
    this.camera.position.z = 10;
    this.sunLight.position.set(0, 2, 5);
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








/* buildTeaser() {
    
  } */