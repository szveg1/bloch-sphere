import "./Main.less";
import { Controls } from "./Controls";
import { useEffect, useRef } from 'preact/hooks';
import { initThree, ThreeController } from './ThreeScene';

export function Main() {
    const controllerRef = useRef<ThreeController | null>(null);

    useEffect(() => {
        const canvas = document.getElementById('three-scene') as HTMLCanvasElement | null;
        if (!canvas) return;
        const controller = initThree(canvas);
        controllerRef.current = controller;
        return () => controller?.dispose();
    }, []);

    return <div class="Main">
        <canvas id="three-scene" style={{ width: '100%', height: '100%' }}></canvas>
        <Controls 
            onApplyGate={(g) => controllerRef.current?.applyGate(g)}
            onReset={() => controllerRef.current?.reset()}
        />
    </div>
}