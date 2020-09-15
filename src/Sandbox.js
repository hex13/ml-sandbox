import React from 'react';
import './Sandbox.css';
import { createDots, createId } from './utils';

export function Sandbox({ usePredict }) {
    const w = 600;
    const h = 600;
    const description = "click to add/remove dots";
    const [dots, setDots] = React.useState(createDots());
    const { predict, title } = usePredict(dots);
    const addDot = (e) => {
        const bounds = e.target.getBoundingClientRect();
        const dot = {
            id: createId(),
            x: (e.clientX - bounds.left) - w / 2,
            y: (e.clientY - bounds.top) - h / 2,
        };
        setDots(dots => dots.concat(dot));
    }

    return <div>
        <h1>{ title  }</h1>
        <svg 
            className="sandbox"
            width={w}
            height={h}
            onClick={addDot}
            viewBox={`${- w / 2} ${- h / 2} ${w} ${h}`}
        >
            {
                dots.map(dot => {
                    return <circle 
                        className="dot"
                        fill="rgba(0, 0, 0, 0.4)"
                        key={dot.id}
                        cx={dot.x} 
                        cy={dot.y} 
                        r={6}
                        onClick={(e) => {
                            setDots(dots => dots.filter(d => d.id != dot.id));
                            e.stopPropagation();
                        }}
                    />;
                })
            }
            <path d={`M ${-w/2} ${~~predict(-w/2)} L ${w/2} ${~~predict(w/2)}`}  stroke="red" strokeWidth="2"/>
            <line x1={-w/2} y1="0" x2={w/2} y2="0" stroke="rgba(0, 0, 255, 0.5)"/>
            <line x1="0" y1={-h/2} x2="0" y2={h/2} stroke="rgba(0, 0, 255, 0.5)" />
        </svg>
        <div>{ description }</div>
        <button onClick={() => setDots([])}>clear</button>
    </div>
}