import { DodecahedronGeometry, MeshStandardMaterial, Mesh } from "three";

export class HeaderBackground {
    backGroundGeometry = new DodecahedronGeometry(0.75, 3);
    backGroundMaterial = new MeshStandardMaterial({
        color: 0x5d00bb,
    });
    background = new Mesh(this.backGroundGeometry, this.backGroundMaterial);
    elementCount = 20;

    buildBackground() {
        if (window.innerWidth < 500) {
            this.elementCount = 10;
        }
        const randomPositionX = (Math.random() - 0.5) * (window.innerWidth / this.elementCount);
        const randomPositionY = (Math.random() - 0.5) * (window.innerHeight / this.elementCount);
        const randomPositionZ = -Math.random() * 25;
        this.background.position.set(randomPositionX, randomPositionY, randomPositionZ);
        return this.background;
    }


}