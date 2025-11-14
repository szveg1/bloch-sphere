import "./Controls.less";
import { LatexButton } from "./LatexButton";
import { Gate } from './ThreeScene';

interface ControlsProps {
    onApplyGate: (gate: Gate) => void;
    onReset?: () => void;
}

export function Controls({ onApplyGate, onReset }: ControlsProps) {
    return <div class="Controls">
        <h1 class="h1">Bloch Sphere Visualization</h1>
        <div class="Gates">
            <LatexButton 
                latex="X = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}" 
                onClick={() => onApplyGate('X')} />
            <LatexButton
                latex="Y = \begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}"
                onClick={() => onApplyGate('Y')} />
            <LatexButton
                latex="Z = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}"
                onClick={() => onApplyGate('Z')} />
            <LatexButton
                latex="H = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}"
                onClick={() => onApplyGate('H')} />
            <div style={{ marginTop: '0.5rem' }}>
                <button type="button" onClick={onReset}>Reset</button>
            </div>
        </div>
        </div>
}