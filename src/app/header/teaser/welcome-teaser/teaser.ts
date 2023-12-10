import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export class Teaser {
    fontLoader = new FontLoader();
    teaser: any;
    /* cube: any; */

    buildTeaser() {
        this.fontLoader.load(
            '/assets/fonts/helvetiker_regular.typeface.json',
            (font) => {
                let textGeometry = new TextGeometry(
                    'Hi, ich bin Jacques',
                    {
                        font: font,
                        size: 0.5,
                        height: 0.2,
                        curveSegments: 12,
                        bevelEnabled: true,
                        bevelThickness: 0.03,
                        bevelSize: 0.02,
                        bevelOffset: 0,
                        bevelSegments: 5,
                    }
                );
                let textMaterial = new THREE.MeshBasicMaterial()
                let teaserMesh = new THREE.Mesh(textGeometry, textMaterial);
                let teaser = teaserMesh;
                console.log(teaser)
                return teaser;
            }
        );

        /* let boxGeometry = new THREE.BoxGeometry(1, 1, 1, 100, 100);
        let boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        let cube = new THREE.Mesh(boxGeometry, boxMaterial);
        this.cube = cube;
        return this.cube; */
    }


}