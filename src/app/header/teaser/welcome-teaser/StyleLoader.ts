import { TextureLoader, LoadingManager } from "three";


export class StyleLoader {
    textureLoader: TextureLoader = new TextureLoader();
    loadingManager: LoadingManager = new LoadingManager();
    ringTextures: string[] = [];


    loadRingTextures() {
        const AO: any = this.textureLoader.load('assets/img/metal/compressed/AO.webp');
        const BC: any = this.textureLoader.load('assets/img/metal/compressed/BC.webp');
        const height: any = this.textureLoader.load('assets/img/metal/compressed/height.webp');
        const metallic: any = this.textureLoader.load('assets/img/metal/compressed/metallic.webp');
        const normal: any = this.textureLoader.load('assets/img/metal/compressed/normal.webp');
        const roughness: any = this.textureLoader.load('assets/img/metal/compressed/roughness.webp');
        this.ringTextures.push(AO, BC, height, metallic, normal, roughness);
        return this.ringTextures;
    }

    loadProfileImage() {
        const profileImage = this.textureLoader.load('assets/img/JacquesLöhr.webp');
        return profileImage;
    }
}
