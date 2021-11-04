import { useState, useCallback, memo } from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import { Canvas } from './Canvas.jsx';
import { Box } from './Box';
import { ClothTypes } from './ClothTypes';
import update from 'immutability-helper';
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
        { name: 'Canada Goose Parka', type: [ClothTypes.WINTERWEAR },
        { name: 'Girotti Heals', type: ClothTypes.FOOTWEAR},
    ]);
    
    const [droppedClothNames, setDroppedClothNames] = useState([]);
    
    function isDropped(clothName) {
        return droppedClothNames.indexOf(clothName) > -1;
    }
    const handleDrop = useCallback((index, item) => {
        const { name } = item;
        setDroppedBoxNames(update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }));
        setDustbins(update(dustbins, {
            [index]: {
                lastDroppedItem: {
                    $set: item,
                },
            },
        }));
    }, [droppedBoxNames, dustbins]);
    return (<div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>
				{dustbins.map(({ accepts, lastDroppedItem }, index) => (<Dustbin accept={accepts} lastDroppedItem={lastDroppedItem} onDrop={(item) => handleDrop(index, item)} key={index}/>))}
			</div>

			<div style={{ overflow: 'hidden', clear: 'both' }}>
				{boxes.map(({ name, type }, index) => (<Box name={name} type={type} isDropped={isDropped(name)} key={index}/>))}
			</div>
		</div>);
});
