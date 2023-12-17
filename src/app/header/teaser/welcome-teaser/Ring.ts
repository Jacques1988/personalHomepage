import { TorusGeometry, MeshStandardMaterial, Mesh, NearestFilter, RepeatWrapping } from 'three';
import { Teaser } from './Teaser';
import { Frame } from './Frame';


export class Ring {
    ringGeometry: THREE.TorusGeometry = new TorusGeometry(5, 0.2, 100, 100,);
    ringMaterial = new MeshStandardMaterial();
    ringMesh = new Mesh(this.ringGeometry, this.ringMaterial);
    scene: THREE.Scene;
    teaser = new Teaser();
    frame = new Frame();
    imageFrame: any;

    constructor(scene: THREE.Scene, image: any) {
        this.scene = scene;
        this.teaser.loadFont(this.scene);
        this.imageFrame = this.frame.buildImageFrame(image);
        this.scene.add(this.imageFrame)
    }

    buildRing(surface: any) {

        this.ringMaterial.aoMap = surface[0];
        this.ringMaterial.aoMapIntensity = 0.5;
        this.ringMaterial.map = surface[1];
        this.ringMaterial.displacementMap = surface[2];
        this.ringMaterial.displacementScale = 0.03;
        this.ringMaterial.metalnessMap = surface[3];
        this.ringMaterial.metalness = 0.8;
        this.ringMaterial.normalMap = surface[4];
        this.ringMaterial.roughnessMap = surface[5];
        this.ringMaterial.roughness = 1;

        this.ringMesh.position.y = 1;

        for (let i = 0; i < surface.length; i++) {
            surface[i].magFilter = NearestFilter;
            surface[i].wrapS = RepeatWrapping;
            surface[i].wrapT = RepeatWrapping;
            surface[i].repeat.set(10, 1);
        }

        return this.ringMesh;
    }
}