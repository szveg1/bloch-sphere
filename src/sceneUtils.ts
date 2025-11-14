import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer';
import * as KaTeX from 'katex';
import 'katex/dist/katex.min.css';


export function setupLabelRenderer(canvas: HTMLCanvasElement) {
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0';
    labelRenderer.domElement.style.pointerEvents = 'none';
    canvas.parentElement?.appendChild(labelRenderer.domElement);
    return labelRenderer;
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
