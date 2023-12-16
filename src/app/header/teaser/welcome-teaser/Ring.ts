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
        }

        surface[0].wrapS = THREE.RepeatWrapping;
        surface[1].wrapS = THREE.RepeatWrapping;
        surface[2].wrapS = THREE.RepeatWrapping;
        surface[3].wrapS = THREE.RepeatWrapping;
        surface[4].wrapS = THREE.RepeatWrapping;
        surface[5].wrapS = THREE.RepeatWrapping;

        surface[0].wrapT = THREE.RepeatWrapping;
        surface[1].wrapT = THREE.RepeatWrapping;
        surface[2].wrapT = THREE.RepeatWrapping;
        surface[3].wrapT = THREE.RepeatWrapping;
        surface[4].wrapT = THREE.RepeatWrapping;
        surface[5].wrapT = THREE.RepeatWrapping;

        surface[0].repeat.set(10, 1);
        surface[1].repeat.set(10, 1);
        surface[2].repeat.set(10, 1);
        surface[3].repeat.set(10, 1);
        surface[4].repeat.set(10, 1);
        surface[5].repeat.set(10, 1);



        return this.ringMesh;
    }

}