import { PlaneGeometry, MeshStandardMaterial, Mesh, Color, DoubleSide } from "three";


export class Frame {
    frameGeometry: PlaneGeometry = new PlaneGeometry(4, 6, 100, 100);
    frameMaterial: MeshStandardMaterial = new MeshStandardMaterial({
        color: new Color(0xffffff),
        transparent: true,
        side: DoubleSide,
    })
    frame: Mesh = new Mesh(this.frameGeometry, this.frameMaterial);


    buildImageFrame(image: any) {
        this.frameMaterial.map = image;
        this.frame.position.y = 2.75;
        return this.frame;
    }

}