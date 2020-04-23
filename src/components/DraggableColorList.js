import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import DraggableColorBox from './DraggableColorBox';

function DraggableColorList({ colors, setColors }) {
    const removeColor = (colorName) => {
        setColors(colors.filter((color) => color.name !== colorName));
    };
    return (
        <div
            style={{
                height: '100%',
            }}
        >
            {colors.map((color, i) => (
                <DraggableColorBox
                    index={i}
                    key={color.name}
                    color={color.color}
                    name={color.name}
                    handleClick={() => removeColor(color.name)}
                />
            ))}
        </div>
    );
}
export default SortableContainer(DraggableColorList);
