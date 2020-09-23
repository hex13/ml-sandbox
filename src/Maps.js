import React from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Stamen from 'ol/source/Stamen';
import 'ol/ol.css';

export function Maps() {
    React.useEffect(() => {
        const map = new Map({
            target: 'here',
            layers: [
                new TileLayer({
                    source: new Stamen({layer: 'watercolor'})
                }),
                new TileLayer({
                    source: new Stamen({layer: 'terrain-labels'})
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 0,
            })
        });
    }, []);
    return <>
        <div style={{width:800,height:600,border: '1px solid green'}} id="here" />
    </>
}