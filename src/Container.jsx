import { useState, useCallback, memo } from 'react';
import { Canvas } from './Canvas.jsx';
import { Cloths } from './Cloths';
import { ClothTypes } from './ClothTypes';
import update from 'immutability-helper';
//import { NativeTypes } from 'react-dnd-html5-backend';


export const Container = memo(function Container() {
    const [canvases, setCanvases] = useState([
        { accepts: [ClothTypes.HEADWEAR], lastDroppedItem: null },
        { accepts: [ClothTypes.EYEWEAR], lastDroppedItem: null },
        { accepts: [ClothTypes.WINTERWEAR], lastDroppedItem: null},
        { accepts: [ClothTypes.UPPERBODYWEAR], lastDroppedItem: null },
        { accepts: [ClothTypes.LOWERBODYWEAR], lastDroppedItem: null },
        { accepts: [ClothTypes.BAGS], lastDroppedItem: null },
        { accepts: [ClothTypes.FOOTWEAR], lastDroppedItem: null },
    ]);
    const [clothes] = useState([
        { name: 'Beanie', type: ClothTypes.HEADWEAR },
        { name: 'Canada Goose Parka', type: ClothTypes.WINTERWEAR},
        { name: 'Girotti Heals', type: ClothTypes.FOOTWEAR},
    ]);
    
    const [droppedClothNames, setDroppedClothNames] = useState([]);
    
    function isDropped(clothName) {
        return droppedClothNames.indexOf(clothName) > -1;
    }
    
    const handleDrop = useCallback((index, item) => {
        const { name } = item;
        setDroppedClothNames(update(droppedClothNames, name ? { $push: [name] } : { $push: [] }));
        setCanvases(update(canvases, {
            [index]: {
                lastDroppedItem: {
                    $set: item,
                },
            },
        }));
    }, [droppedClothNames, canvases]);
    
    return (<div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>
				{canvases.map(({ accepts, lastDroppedItem }, index) => (<Canvas accept={accepts} lastDroppedItem={lastDroppedItem} onDrop={(item) => handleDrop(index, item)} key={index}/>))}
			</div>

			<div style={{ overflow: 'hidden', clear: 'both' }}>
				{clothes.map(({ name, type }, index) => (<Cloths name={name} type={type} isDropped={isDropped(name)} key={index}/>))}
			</div>
		</div>);
});
