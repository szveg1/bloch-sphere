import * as THREE from 'three';

export class Arrow {
    private direction: THREE.Vector3;
    private length: number;
    private color: number;
    private shaftRadius: number;
    private headLength: number;
    private headRadius: number;
    private group: THREE.Group | null = null;

    constructor(
        direction = new THREE.Vector3(1, 0, 0),
        length = 0.5,
        color = 0xff0000,
        shaftRadius = 0.02,
        headLength = 0.1,
        headRadius = 0.05,
    ) {
        this.direction = direction.clone().normalize();
        this.length = length;
        this.color = color;
        this.shaftRadius = shaftRadius;
        this.headLength = headLength;
        this.headRadius = headRadius;
    }

    create(): THREE.Group {
        const dir = this.direction;
        const length = this.length;
        
        const hl = Math.min(this.headLength, length * 0.5);
        const shaftLength = Math.max(0, length - hl);
        const material = new THREE.MeshBasicMaterial({ color: this.color });
        
        const shaftGeom = new THREE.CylinderGeometry(this.shaftRadius, this.shaftRadius, shaftLength, 8);
        const shaft = new THREE.Mesh(shaftGeom, material);
        shaft.rotation.z = Math.PI / 2;
        shaft.position.x = shaftLength / 2;
        const headGeom = new THREE.ConeGeometry(this.headRadius, hl, 8);
        const head = new THREE.Mesh(headGeom, material);
        head.rotation.z = -Math.PI / 2;
        head.position.x = shaftLength + hl / 2;
        const group = new THREE.Group();
        group.add(shaft, head);

        const q = new THREE.Quaternion();
        q.setFromUnitVectors(new THREE.Vector3(1, 0, 0), dir);
        group.setRotationFromQuaternion(q);
        this.group = group;
        return group;
    }

    applyQuaternion(quat: THREE.Quaternion) {
        if (!this.group) return;
        this.group.quaternion.premultiply(quat);
    }
    
    setDirection(vec: THREE.Vector3) {
        if (!this.group) return;
        const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(1,0,0), vec.clone().normalize());
        this.group.setRotationFromQuaternion(q);
    }
}