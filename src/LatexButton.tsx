import * as KaTeX from 'katex';
import 'katex/dist/katex.min.css';

interface LatexButtonProps {
    latex: string;
    onClick: () => void;
}

export function LatexButton({ latex, onClick }: LatexButtonProps) {
    const html = KaTeX.renderToString(latex, { throwOnError: false });
    return (
        <div class="LatexButton">
            <button type="button" onClick={onClick}>
                <span dangerouslySetInnerHTML={{ __html: html }} />
            </button>
        </div>
    );
}