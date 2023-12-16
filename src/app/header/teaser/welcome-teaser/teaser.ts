import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { StyleLoader } from './StyleLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export class Teaser {
    fontLoader: FontLoader = new FontLoader();
    fontUrl: string = 'assets/fonts/Spacewar_Regular.json';
    teaser: any;


    loadFont(scene: THREE.Scene) {
        let textureLoader = new THREE.TextureLoader();

        //loads first sentence with name
        this.fontLoader.load(
            this.fontUrl,
            (font: any) => {
                const text = new TextGeometry(
                    'Hi, ich bin Jacques', {
                    font: font,
                    size: 0.5,
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
                teaser.position.y = -1;
                scene.add(teaser);
            }
        );

        //loads what i am
        this.fontLoader.load(
            this.fontUrl,
            (font: any) => {
                const textTeaser = new TextGeometry(
                    'Ich bin Webentwickler', {
                    font: font,
                    size: 0.35,
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
                secondText.position.y = -2;
                scene.add(secondText);
            }
        )

    }
}