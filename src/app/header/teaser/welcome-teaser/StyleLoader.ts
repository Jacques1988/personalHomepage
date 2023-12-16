import { TextureLoader, LoadingManager } from "three";


export class StyleLoader {
    textureLoader: TextureLoader = new TextureLoader();
    loadingManager: LoadingManager = new LoadingManager();
    ringTextures: string[] = [];


    loadRingTextures() {
        const AO: any = this.textureLoader.load('assets/img/metal/AO.jpg');
        const BC: any = this.textureLoader.load('assets/img/metal/BC.jpg');
        const height: any = this.textureLoader.load('assets/img/metal/height.png');
        const metallic: any = this.textureLoader.load('assets/img/metal/metallic.jpg');
        const normal: any = this.textureLoader.load('assets/img/metal/normal.jpg');
        const roughness: any = this.textureLoader.load('assets/img/metal/roughness.jpg');
        this.ringTextures.push(AO, BC, height, metallic, normal, roughness);
        return this.ringTextures;
    }
}
