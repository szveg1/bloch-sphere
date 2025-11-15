import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import { setupLabelRenderer } from './Utils';
import { Arrow } from './Arrow';
import { Sphere } from './Sphere';
import { Qubit } from './Qubit';

export interface ThreeController {
    dispose: () => void;
}

export function initThree(canvas: HTMLCanvasElement, qubit: Qubit): ThreeController | null {
    if (!canvas) {
        return null;
    }

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);

    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 5;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const controls = new OrbitControls(camera, canvas);
    controls.update();

    const labelRenderer = setupLabelRenderer(canvas);
    const sphere = new Sphere(0.5, 8);
    const arrow = new Arrow(new THREE.Vector3(0, 1, 0));
    const arrowGroup = arrow.create();
    scene.add(arrowGroup, sphere.create());

    qubit.setArrow(arrow);

    function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== Math.floor(width * window.devicePixelRatio) ||
            canvas.height !== Math.floor(height * window.devicePixelRatio);
        if (needResize) {
            renderer.setSize(width, height, false);
            labelRenderer.setSize(width, height);
        }
        return needResize;
    }

    let rafId = 0;

    function render() {
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        controls.update();
        renderer.render(scene, camera);
        labelRenderer.render(scene, camera);
        rafId = requestAnimationFrame(render);
    }

    rafId = requestAnimationFrame(render);

    const controller: ThreeController = {
        dispose() {
            cancelAnimationFrame(rafId);
            if (labelRenderer.domElement && labelRenderer.domElement.parentElement) {
                labelRenderer.domElement.parentElement.removeChild(labelRenderer.domElement);
            }
            renderer.dispose();
        }
    };

    return controller;
}