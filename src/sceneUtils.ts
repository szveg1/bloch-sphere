import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';
import * as KaTeX from 'katex';
import 'katex/dist/katex.min.css';

export function createSphereGroup(radius = 0.5) {
    const geom = new THREE.SphereGeometry(radius, 8, 8);
    const edges = new THREE.EdgesGeometry(geom);
    const mat = new THREE.MeshBasicMaterial({ color: 0x0000aa, transparent: true, opacity: 0.15 });
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x0 });
    const mesh = new THREE.Mesh(geom, mat);
    const wire = new THREE.LineSegments(edges, edgeMat);
    const group = new THREE.Group();
    group.add(mesh, wire);
    group.rotation.x = 0.4;
    return group;
}

export function setupLabelRenderer(canvas: HTMLCanvasElement) {
    const lr = new CSS2DRenderer();
    lr.domElement.style.position = 'absolute';
    lr.domElement.style.top = '0';
    lr.domElement.style.pointerEvents = 'none';
    canvas.parentElement?.appendChild(lr.domElement);
    return lr;
}

export function makeKaTeXLabel(latex: string, fontSize = 20, color = '#ffffff') {
    const div = document.createElement('div');
    div.style.color = color;
    div.style.fontSize = `${fontSize}px`;
    div.style.lineHeight = '1';
    div.style.whiteSpace = 'nowrap';
    div.style.pointerEvents = 'none';
    const macros: any = { '\\ket': '\\lvert#1\\rangle' };
    try {
        div.innerHTML = KaTeX.renderToString(latex, { throwOnError: false, macros });
    } catch (e) {
        div.textContent = latex;
    }
    return new CSS2DObject(div);
}

export function createArrowHelper(
    direction = new THREE.Vector3(1, 0, 0),
    length = 0.5,
    color = 0xff0000,
    shaftRadius = 0.02,
    headLength = 0.1,
    headRadius = 0.05,
) {
    const dir = direction.clone().normalize();
    // Clamp head length so it doesn't exceed half the arrow
    const hl = Math.min(headLength, length * 0.5);
    const shaftLength = Math.max(0, length - hl);

    const material = new THREE.MeshBasicMaterial({ color });

    // Cylinder (shaft) - by default aligned with Y; we'll rotate to X
    const shaftGeom = new THREE.CylinderGeometry(shaftRadius, shaftRadius, shaftLength, 8);
    const shaft = new THREE.Mesh(shaftGeom, material);
    shaft.rotation.z = Math.PI / 2;
    shaft.position.x = shaftLength / 2; // place base at origin

    const headGeom = new THREE.ConeGeometry(headRadius, hl, 8);
    const head = new THREE.Mesh(headGeom, material);
    head.rotation.z = -Math.PI / 2;
    head.position.x = shaftLength + hl / 2; // place cone base at shaft end

    const group = new THREE.Group();
    group.add(shaft, head);

    // rotate group so +X maps to desired direction
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(1, 0, 0), dir);
    group.setRotationFromQuaternion(q);

    return group;
}
