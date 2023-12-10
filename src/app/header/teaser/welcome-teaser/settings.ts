import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { sizes } from './sizes';
import * as THREE from 'three';
import { Teaser } from './teaser';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';


export class WelcomeTeaser {
  fontLoader: any = new FontLoader();
  renderer: THREE.WebGLRenderer;
  sizes: sizes;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene = new THREE.Scene();
  clock: THREE.Clock = new THREE.Clock();
  light: THREE.AmbientLight = new THREE.AmbientLight(0xffffff, 0.7);
  sunLight = new THREE.PointLight(0xffffff, 1000)
  teaser: any;
  controls: any;

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

    this.loadFont();
    this.settings();
    this.scene.add(
      this.camera,
      this.light,
      this.sunLight,
    );
  }

  loadFont() {
    let textUrl = 'assets/fonts/helvetiker_regular.typeface.json'
    let textureLoader = new THREE.TextureLoader();

    this.fontLoader.load(
      textUrl,
      (font: any) => {
        const text = new TextGeometry(
          'Hi, ich bin Jacques', {
          font: font,
          size: 0.7,
          height: 0.15,
          curveSegments: 10,
          bevelEnabled: true,
          bevelThickness: 0.015,
          bevelSize: 0.03,
          bevelOffset: 0,
          bevelSegments: 10
        }
        );
        text.center();
        let matcapTexture = textureLoader.load('assets/img/violet.png');
        let textMaterial = new THREE.MeshMatcapMaterial({
          matcap: matcapTexture,
          flatShading: true,
        });
        let teaser = new THREE.Mesh(text, textMaterial);
        teaser.position.y = 2;
        this.scene.add(teaser);
      }
    )


    this.fontLoader.load(
      textUrl,
      (font: any) => {
        const textTeaser = new TextGeometry(
          'Ich bin Webentwickler', {
          font: font,
          size: 0.7,
          height: 0.15,
          curveSegments: 48,
          bevelEnabled: true,
          bevelThickness: 0.015,
          bevelSize: 0.03,
          bevelOffset: 0,
          bevelSegments: 10
        }
        );
        textTeaser.center();
        let matcapTexture = textureLoader.load('assets/img/violet.png');
        let textMaterial = new THREE.MeshMatcapMaterial({
          matcap: matcapTexture,
          flatShading: true,
        });
        let secondText = new THREE.Mesh(textTeaser, textMaterial);

        this.scene.add(secondText);
      }
    )

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

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.startScreen)
  }
}








/* buildTeaser() {
    
  } */