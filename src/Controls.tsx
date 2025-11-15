import "./Controls.less";
import * as KaTeX from "katex";
import { LatexButton } from "./LatexButton";
import { Qubit, Gate } from "./Qubit";
import { useState, useMemo } from "preact/hooks";
import { LatexSlider } from "./LatexSlider";

interface ControlsProps {
    qubit: Qubit;
    onUpdate: () => void;
}

export function Controls({ qubit, onUpdate }: ControlsProps) {
    const [phase, setPhase] = useState(Math.PI / 4);
    const [theta, setTheta] = useState(0);
    const [phi, setPhi] = useState(0);

    const qubitHtml = useMemo(() => KaTeX.renderToString(qubit.makeLatex(), { throwOnError: false }), [qubit]);
    const phaseHtml = useMemo(() => KaTeX.renderToString(`\\phi = ${(phase / Math.PI).toFixed(2)}\\pi`, { throwOnError: false }), [phase]);

    const handleGate = (gate: Gate, gatePhase?: number) => {
        qubit.applyGate(gate, gatePhase);
        onUpdate();
    };

    const handleReset = () => {
        qubit.reset();
        onUpdate();
    };

    const handleSetState = () => {
        qubit.setState(theta, phi);
        onUpdate();
    };

    return <div class="Controls">
        <h1>Bloch Sphere Simulator</h1>
        <div class="QubitLabel" dangerouslySetInnerHTML={{ __html: qubitHtml }}/>
        <div class="QubitState">
            <LatexSlider
                latex={`\\theta = ${(theta / Math.PI).toFixed(2)}\\pi`}
                min={0}
                max={Math.PI}
                value={theta}
                onInput={setTheta}
            />
            <LatexSlider
                latex={`\\varphi = ${(phi / Math.PI).toFixed(2)}\\pi`}
                min={0}
                max={2 * Math.PI}
                value={phi}
                onInput={setPhi}
            />
            <button type="button" onClick={handleSetState}>Set State</button>
            <button type="button" onClick={handleReset}>
                <span>Reset qubit to initial state (
                    <span dangerouslySetInnerHTML={{ __html: KaTeX.renderToString("\\ket{0}", {displayMode: false})}}/>
                )
                </span>
            </button>
        </div>
        <div class="Gates">
            <LatexButton 
                latex="X = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}" 
                onClick={() => handleGate('X')} />
            <LatexButton
                latex="Y = \begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}"
                onClick={() => handleGate('Y')} />
            <LatexButton
                latex="Z = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}"
                onClick={() => handleGate('Z')} />
            <LatexButton
                latex="H = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}"
                onClick={() => handleGate('H')} />
            <div>
                <LatexButton
                    latex="P(\phi) = \begin{bmatrix} 1 & 0 \\ 0 & e^{i\phi} \end{bmatrix}"
                    onClick={() => handleGate('P', phase)} />
                <div style={{ marginTop: '0.5rem' }}>
                    <div dangerouslySetInnerHTML={{ __html: phaseHtml }} style={{ marginBottom: '0.25rem' }}/>
                    <input 
                        type="range" 
                        min="0" 
                        max={2 * Math.PI} 
                        step="0.01" 
                        value={phase}
                        onInput={(e) => setPhase(parseFloat((e.target as HTMLInputElement).value))}
                        style={{ width: '100%' }}
                    />
                </div>
            </div>
        </div>
    </div>
}