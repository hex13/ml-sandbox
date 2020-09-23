import React from 'react';
import * as Plotly from 'plotly.js-dist';
// OR
// import * as Plotly from 'plotly.js/dist/plotly';

function createSomeFancyData() {
    const xs = [], ys = [], zs = [];
    for (let i = 0; i < 100; i++) {
        for (let angle = 0; angle <= Math.PI * 2; angle += 0.4 + i * 0.001) {
            const x = Math.cos(angle) * 5;
            const y = Math.sin(angle) * 5;
            const z = i;
            xs.push(x);
            ys.push(y);
            zs.push(z);
        }
    }   
    return [xs, ys, zs];
}

const [xs, ys, zs] = createSomeFancyData();

export function Scatter() {
    const chartRef = React.useRef();
    React.useEffect(() => {
            Plotly.newPlot(chartRef.current, [{
                x: xs, y: ys, z: zs,
                mode: 'markers',
                marker:{
                    size: 5, 
                    line: {
                        color: 'yellow',
                        width: 0.5,
                        opacity: 0.6,
                    }
                },
                type: 'scatter3d',
            }])
    }, []);
    return <div ref={chartRef}></div>
}