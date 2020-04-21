import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import styles from './../styles/MiniPaletteStyles';

function MiniPalette(props) {
    const {
        classes,
        paletteName,
        emoji,
        colors,
        handleClick,
        deletePalette,
        id,
    } = props;
    const miniColorBoxes = colors.map((color) => (
        <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
        ></div>
    ));

    const handleDeletePalette = (e) => {
        e.stopPropagation();
        deletePalette(id);
    };

    return (
        <div className={classes.root} onClick={handleClick}>
            <DeleteForeverIcon
                className={classes.deleteIcon}
                onClick={handleDeletePalette}
            />
            <div className={classes.colors}>{miniColorBoxes}</div>
            <div className={classes.title}>
                {' '}
                {paletteName} <span className={classes.emoji}>{emoji}</span>{' '}
            </div>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);
