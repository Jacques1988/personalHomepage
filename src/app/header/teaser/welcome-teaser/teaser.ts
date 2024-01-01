import { TextureLoader, MeshMatcapMaterial, Mesh } from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export class Teaser {
    fontLoader: FontLoader = new FontLoader();
    fontUrl: string = 'assets/fonts/Spacewar_Regular.json';
    teaser: any;

    loadFont(scene: THREE.Scene) {
        let textureLoader = new TextureLoader();

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
                let matcapTexture = textureLoader.load('assets/img/darkPurple2.webp');
                let textMaterial = new MeshMatcapMaterial({
                    matcap: matcapTexture,
                    flatShading: true,
                });
                let teaser = new Mesh(text, textMaterial);
                window.innerWidth < 500 ? teaser.position.y = 1 : teaser.position.y = -1;
                scene.add(teaser);
            }
        );

        //loads what i am
        this.fontLoader.load(
            this.fontUrl,
            (font: any) => {
                const textTeaser = new TextGeometry(
                    'Ihr Webentwickler', {
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
                let matcapTexture = textureLoader.load('assets/img/darkPurple2.webp');
                let textMaterial = new MeshMatcapMaterial({
                    matcap: matcapTexture,
                    flatShading: true,
                });
                let secondText = new Mesh(textTeaser, textMaterial);
                window.innerWidth < 500 ? secondText.position.y = 0 : secondText.position.y = -2;
                scene.add(secondText);
            }
        )
    }
}