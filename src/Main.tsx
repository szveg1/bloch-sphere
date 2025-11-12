import "./Main.less";
import { Controls } from "./Controls";
import { useEffect } from 'preact/hooks';
import { initThree } from './ThreeScene';

export function Main() {
    useEffect(() => {
        const canvas = document.getElementById('three-scene') as HTMLCanvasElement | null;
        if (!canvas) return;
        const cleanup = initThree(canvas);
        return cleanup;
    }, []);

    return <div class="Main">
        <canvas id="three-scene" style={{ width: '100%', height: '100%' }}></canvas>
        <Controls />
    </div>
}