import "./Main.less";
import { Controls } from "./Controls";
import { useEffect, useRef, useState } from 'preact/hooks';
import { initThree, ThreeController } from './ThreeScene';
import { Qubit } from "./Qubit";

export function Main() {
    const controllerRef = useRef<ThreeController | null>(null);
    const qubitRef = useRef(new Qubit());
    const [, forceUpdate] = useState({});

    useEffect(() => {
        const canvas = document.getElementById('three-scene') as HTMLCanvasElement | null;
        if (!canvas) return;
        const controller = initThree(canvas, qubitRef.current);
        controllerRef.current = controller;
        return () => controller?.dispose();
    }, []);

    const handleUpdate = () => {
        forceUpdate({});
    };

    return <div class="Main">
        <canvas id="three-scene" style={{ width: '100%', height: '100%' }}></canvas>
        <Controls 
            qubit={qubitRef.current}
            onUpdate={handleUpdate}
        />
    </div>
}