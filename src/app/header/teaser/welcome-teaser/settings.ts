import { Scene, DirectionalLight, PerspectiveCamera, WebGLRenderer, } from 'three'
import { sizes } from './sizes';
import { Ring } from './Ring';
import { StyleLoader } from './StyleLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class WelcomeTeaser {
  styleLoader: StyleLoader = new StyleLoader();
  renderer: THREE.WebGLRenderer;
  sizes: sizes;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene = new Scene();
  profileImage: any = this.styleLoader.loadProfileImage();
  sunLight = new DirectionalLight(0xffffff, 2)
  ringComponent: Ring = new Ring(this.scene, this.profileImage);
  ringSurface: string[] = this.styleLoader.loadRingTextures();
  ring = this.ringComponent.buildRing(this.ringSurface);
  controls: OrbitControls;

  constructor(private canvas: HTMLCanvasElement, private canvasContainer: HTMLElement) {

    this.canvas = canvas;
    this.canvasContainer = canvasContainer;
    this.sizes = {
      width: this.canvasContainer.clientWidth,
      height: this.canvasContainer.clientHeight,
      aspect: this.canvasContainer.clientWidth / this.canvasContainer.clientHeight,
    }
    this.camera = new PerspectiveCamera(75, this.sizes.aspect, 0.01, 1000);
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
    });
    this.controls = new OrbitControls(this.camera, this.canvas);

    this.settings();
    this.scene.add(
      this.camera,
      this.sunLight,
      this.ring,
    );
  }

  settings() {

    if (window.innerWidth < 500) {
      this.camera.position.z = 15;
      this.ring.position.y = 3;
    } else {
      this.camera.position.z = 10;
    }
    this.canvas.width = this.sizes.width;
    this.canvas.height = this.sizes.height;
    this.sunLight.position.set(0, 2, 5);
    this.renderer.setSize(
      this.sizes.width,
      this.sizes.height
    );

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.startScreen();
  }

  startScreen = () => {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.startScreen)
  }
}
