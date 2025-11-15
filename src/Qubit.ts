import * as THREE from 'three';
import { Arrow } from './Arrow';

export type Gate = 'X' | 'Y' | 'Z' | 'H' | 'P';

export class Qubit {
    alpha: THREE.Vector2;
    beta: THREE.Vector2;
    private arrow: Arrow | null = null;
    private initialAlpha: THREE.Vector2;
    private initialBeta: THREE.Vector2;

    constructor(alpha?: THREE.Vector2, beta?: THREE.Vector2) {
        this.alpha = alpha || new THREE.Vector2(1, 0);
        this.beta = beta || new THREE.Vector2(0, 0);
        this.initialAlpha = this.alpha.clone();
        this.initialBeta = this.beta.clone();
    }

    public setArrow(arrow: Arrow) {
        this.arrow = arrow;
    }

    public makeLatex(): string {
        const alphaReal = this.alpha.x.toFixed(2);
        const alphaImag = this.alpha.y.toFixed(2);
        const betaReal = this.beta.x.toFixed(2);
        const betaImag = this.beta.y.toFixed(2);
        return `\\ket{\\psi} = (${alphaReal} + ${alphaImag}i)\\ket{0} + (${betaReal} + ${betaImag}i)\\ket{1}`;
    }

    public getSphericalCoordinates() : THREE.Vector3 {
        const x = 2 * (this.alpha.x * this.beta.x + this.alpha.y * this.beta.y);
        const y = 2 * (this.alpha.y * this.beta.x - this.alpha.x * this.beta.y);
        const z = this.alpha.lengthSq() - this.beta.lengthSq();
        return new THREE.Vector3(x, z, -y).normalize();
    }

    private multiplyComplex(a: THREE.Vector2, b: THREE.Vector2): THREE.Vector2 {
        return new THREE.Vector2(
            a.x * b.x - a.y * b.y,
            a.x * b.y + a.y * b.x
        );
    }

    private applyMatrix(m00: THREE.Vector2, m01: THREE.Vector2, m10: THREE.Vector2, m11: THREE.Vector2) {
        const newAlpha = new THREE.Vector2(
            this.multiplyComplex(m00, this.alpha).x + this.multiplyComplex(m01, this.beta).x,
            this.multiplyComplex(m00, this.alpha).y + this.multiplyComplex(m01, this.beta).y
        );
        const newBeta = new THREE.Vector2(
            this.multiplyComplex(m10, this.alpha).x + this.multiplyComplex(m11, this.beta).x,
            this.multiplyComplex(m10, this.alpha).y + this.multiplyComplex(m11, this.beta).y
        );
        this.alpha = newAlpha;
        this.beta = newBeta;
        this.updateArrow();
    }

    private updateArrow() {
        if (this.arrow) {
            const direction = this.getSphericalCoordinates();
            this.arrow.setDirection(direction);
        }
    }

    public applyGate(gate: Gate, phase?: number) {
        switch (gate) {
            case 'X':
                this.applyMatrix(
                    new THREE.Vector2(0, 0), new THREE.Vector2(1, 0),
                    new THREE.Vector2(1, 0), new THREE.Vector2(0, 0)
                );
                break;
            case 'Y':
                this.applyMatrix(
                    new THREE.Vector2(0, 0), new THREE.Vector2(0, -1),
                    new THREE.Vector2(0, 1), new THREE.Vector2(0, 0)
                );
                break;
            case 'Z':
                this.applyMatrix(
                    new THREE.Vector2(1, 0), new THREE.Vector2(0, 0),
                    new THREE.Vector2(0, 0), new THREE.Vector2(-1, 0)
                );
                break;
            case 'H':
                const factor = 1 / Math.sqrt(2);
                this.applyMatrix(
                    new THREE.Vector2(factor, 0), new THREE.Vector2(factor, 0),
                    new THREE.Vector2(factor, 0), new THREE.Vector2(-factor, 0)
                );
                break;
            case 'P':
                const phi = phase !== undefined ? phase : Math.PI / 4;
                this.applyMatrix(
                    new THREE.Vector2(1, 0), new THREE.Vector2(0, 0),
                    new THREE.Vector2(0, 0), new THREE.Vector2(Math.cos(phi), Math.sin(phi))
                );
                break;
        }
    }

    public setState(theta: number, phi: number) {
        const halfTheta = theta / 2;
        this.alpha = new THREE.Vector2(Math.cos(halfTheta), 0);
        this.beta = new THREE.Vector2(
            Math.cos(phi) * Math.sin(halfTheta),
            Math.sin(phi) * Math.sin(halfTheta)
        );
        this.updateArrow();
    }

    public reset() {
        this.alpha = this.initialAlpha.clone();
        this.beta = this.initialBeta.clone();
        this.updateArrow();
    }
}
