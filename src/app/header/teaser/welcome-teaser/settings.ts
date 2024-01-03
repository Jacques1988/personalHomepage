import { Scene, DirectionalLight, PerspectiveCamera, WebGLRenderer, Clock } from 'three'
import { sizes } from './sizes';
import { Ring } from './Ring';
import { HeaderBackground } from './background';
import { StyleLoader } from './StyleLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class WelcomeTeaser {
  styleLoader: StyleLoader = new StyleLoader();
  renderer: WebGLRenderer;
  clock: Clock = new Clock();
  sizes: sizes;
  camera: PerspectiveCamera;
  scene: Scene = new Scene();
  profileImage: any = this.styleLoader.loadProfileImage();
  sunLight = new DirectionalLight(0xffffff, 2)
  ringComponent: Ring = new Ring(this.scene, this.profileImage);
  ringSurface: string[] = this.styleLoader.loadRingTextures();
  ring = this.ringComponent.buildRing(this.ringSurface);
  headerBackGround: any;
  backGroundElements = {
    count: 100,
  }
  controls: OrbitControls;

  constructor(private canvas: HTMLCanvasElement, private canvasContainer: HTMLElement) {

    this.canvas = canvas;
    this.canvasContainer = canvasContainer;
    this.sizes = {
      width: this.canvasContainer.clientWidth,
      height: this.canvasContainer.clientHeight,
      aspect: this.canvasContainer.clientWidth / this.canvasContainer.clientHeight,
    }
    this.camera = new PerspectiveCamera(20, this.sizes.aspect, 1, 100);
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
    });
    this.controls = new OrbitControls(this.camera, this.canvas);

    window.addEventListener('resize', () => {

      this.sizes.width = this.canvasContainer.clientWidth;
      this.sizes.height = this.canvasContainer.clientHeight;
      this.sizes.aspect = this.canvasContainer.clientWidth / this.canvasContainer.clientHeight;
      this.camera.aspect = this.sizes.aspect;
      this.updateCamera();
      this.rendererUpdates();
    })
    this.buildBackground();
    this.settings();
    this.scene.add(
      this.camera,
      this.sunLight,
      this.ring,
    );
  }

  buildBackground() {
    for (let i = 0; i < this.backGroundElements.count; i++) {
      const headerBackground = new HeaderBackground();
      this.headerBackGround = headerBackground.buildBackground();
      this.scene.add(this.headerBackGround);
    }
  }

  animateBackground(time: number) {
    this.headerBackGround.rotation.z = time * 0.5;
  }

  settings() {

    if (window.innerWidth < 500) {
      this.camera.position.z = 60;
      this.ring.position.y = 3;
    } else {
      this.camera.position.z = 40;
    }

    this.canvas.width = this.sizes.width;
    this.canvas.height = this.sizes.height;
    this.sunLight.position.set(0, 2, 5);
    this.renderer.setSize(
      this.sizes.width,
      this.sizes.height
    );
    this.controlsSettings();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.startScreen();
  }

  controlsSettings() {
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.03;
    this.controls.enableZoom = false;
    this.controls.minPolarAngle = Math.PI / 4;
    this.controls.maxPolarAngle = Math.PI / 1.25;
    this.controls.maxAzimuthAngle = Math.PI * 0.25;
    this.controls.minAzimuthAngle = -Math.PI * 0.25;
  }

  startScreen = () => {
    const elapsedTime = this.clock.getElapsedTime();
    this.animateBackground(elapsedTime);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.startScreen);
  }

  rendererUpdates() {
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  updateCamera() {
    this.camera.updateProjectionMatrix();
  }
}