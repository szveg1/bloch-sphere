import * as THREE from 'three';
import { makeKaTeXLabel } from './sceneUtils';

export class Sphere {
    private radius: number;
    private segments: number;
    private group: THREE.Group;

    constructor(radius = 0.5, segments = 8) {
        this.radius = radius;
        this.segments = segments;
        this.group = new THREE.Group();
    }

    public create() : THREE.Group {
        const geom = new THREE.SphereGeometry(this.radius, this.segments, this.segments);
        const edges = new THREE.EdgesGeometry(geom);
        const mat = new THREE.MeshBasicMaterial({ color: 0x0000aa, transparent: true, opacity: 0.15 });
        const edgeMat = new THREE.LineBasicMaterial({ color: 0x0 });
        const mesh = new THREE.Mesh(geom, mat);
        const wire = new THREE.LineSegments(edges, edgeMat);
        this.group.add(mesh, wire, this.addLabels(0.1));
        return this.group;
    }
    
    private addLabels(labelOffset: number): THREE.Group {
        const labels = new THREE.Group();

        const ket0 = makeKaTeXLabel('\\ket{0}', 20, '#000000');
        ket0.position.set(0, this.radius + labelOffset, 0);

        const ket1 = makeKaTeXLabel('\\ket{1}', 20, '#000000');
        ket1.position.set(0, -this.radius - labelOffset, 0);

        const ketI = makeKaTeXLabel('\\ket{i}', 20, '#000000');
        ketI.position.set(this.radius + labelOffset, 0, 0);

        const ketMinusI = makeKaTeXLabel('\\ket{-i}', 20, '#000000');
        ketMinusI.position.set(-this.radius - labelOffset, 0, 0);

        const ketPlus = makeKaTeXLabel('\\ket{+}', 20, '#000000');
        ketPlus.position.set(0, 0, this.radius + labelOffset);

        const ketMinus = makeKaTeXLabel('\\ket{-}', 20, '#000000');
        ketMinus.position.set(0, 0, -this.radius - labelOffset);

        labels.add(ket0, ket1, ketI, ketMinusI, ketPlus, ketMinus);
        return labels;
    }
}