import * as THREE from 'three';
import { createSphereGroup, setupLabelRenderer, makeKaTeXLabel, createArrowHelper } from './sceneUtils';

export function initThree(canvas: HTMLCanvasElement) {
    if (!canvas) {
        return () => {};
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

    const sphereGroup = createSphereGroup(0.5);
    scene.add(sphereGroup);
    const labelRenderer = setupLabelRenderer(canvas);
    const arrow = createArrowHelper(new THREE.Vector3(1, 0, 0), 0.5, 0xff0000);
    sphereGroup.add(arrow);

    const radius = 0.5;
    const labelOffset = 0.08;
    const ket0 = makeKaTeXLabel('\\ket{0}', 20, '#000000');
    ket0.position.set(0, radius + labelOffset, 0);
    const ket1 = makeKaTeXLabel('\\ket{1}', 20, '#000000');
    ket1.position.set(0, -radius - labelOffset, 0);
    sphereGroup.add(ket0, ket1);

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

        renderer.render(scene, camera);
        labelRenderer.render(scene, camera);
        rafId = requestAnimationFrame(render);
    }

    rafId = requestAnimationFrame(render);

    return () => {
        cancelAnimationFrame(rafId);

        [ket0, ket1].forEach((l) => {
            if (l.parent) l.parent.remove(l);
        });

        if (labelRenderer.domElement && labelRenderer.domElement.parentElement) {
            labelRenderer.domElement.parentElement.removeChild(labelRenderer.domElement);
        }

        renderer.dispose();
    };
}