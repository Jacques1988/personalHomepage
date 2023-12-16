import * as THREE from 'three';


export class Ring {
    ringGeometry: THREE.TorusGeometry = new THREE.TorusGeometry(5, 0.2, 100, 100,);
    ringMaterial = new THREE.MeshStandardMaterial();
    ringMesh = new THREE.Mesh(this.ringGeometry, this.ringMaterial);

    buildRing(surface: any) {

        this.ringMaterial.aoMap = surface[0];
        this.ringMaterial.aoMapIntensity = 0.5;
        this.ringMaterial.map = surface[1];
        this.ringMaterial.displacementMap = surface[2];
        this.ringMaterial.displacementScale = 0.01;
        this.ringMaterial.metalnessMap = surface[3];
        this.ringMaterial.metalness = 1.5;
        this.ringMaterial.normalMap = surface[4];
        this.ringMaterial.roughnessMap = surface[5];
        this.ringMaterial.roughness = 2;
        this.ringMesh.position.y = 1;

        for (let i = 0; i < surface.length; i++) {
            surface[i].magFilter = THREE.NearestFilter;
            surface[i].wrapS = THREE.RepeatWrapping;
            surface[i].wrapT = THREE.RepeatWrapping;
            surface[i].repeat.set(10, 1);
        }


        return this.ringMesh;
    }

}