import KaTeX from 'katex';
import 'katex/dist/katex.min.css';

export interface LatexSliderProps {
    latex: string;
    min: number;
    max: number;
    value: number;
    onInput: (value: number) => void;
}

export function LatexSlider(props: LatexSliderProps) {
    return <div class="LatexSlider">
        <div dangerouslySetInnerHTML={{ __html: KaTeX.renderToString(props.latex, { throwOnError: false }) }}/>
        <input 
            type="range" 
            min={props.min}
            max={props.max}
            step="0.01"
            value={props.value}
            onInput={(e) => props.onInput(parseFloat((e.target as HTMLInputElement).value))}
        />
    </div>;
}