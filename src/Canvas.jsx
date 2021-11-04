import { useDrop } from 'react-dnd';
import {Headwear} from './Headwear.jsx'





const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
};

export const Canvas = () => {

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    
    return <div ref={drop}>
                <Headwear> </Headwear>
                <Upper></Upper>
                <Lower></Lower>
                <Footwear></Footwear>
            </div>



};