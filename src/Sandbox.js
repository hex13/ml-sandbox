import React from 'react';
import './Sandbox.css';

let lastId = 0;

export function Sandbox() {
    const title = ""
    const [dots, setDots] = React.useState([
        {x: 30, y: 100}, {x: 140, y: 120}, {x: 250, y: 130},
    ])
    const description = "click to add/remove dots";
    const addDot = (e) => {
        const bounds = e.target.getBoundingClientRect();
        const dot = {
            id: ++lastId,
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top,
        };
        setDots(dots => dots.concat(dot));
    }

    return <div>
        <h1>{ title  }</h1>
        <svg 
            className="sandbox"
            width="500" 
            height="600" 
            onClick={addDot}
        >
            {
                dots.map(dot => {
                    return <circle 
                        className="dot"
                        fill="rgba(0, 0, 0, 0.5)"
                        key={dot.id}
                        cx={dot.x} 
                        cy={dot.y} 
                        r={8} 
                        onClick={(e) => {
                            setDots(dots => dots.filter(d => d.id != dot.id));
                            e.stopPropagation();
                        }}
                    />;
                })
            }
        </svg>
        <div>{ description }</div>
    </div>
}