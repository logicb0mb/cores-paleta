import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { withStyles } from '@material-ui/styles';

import styles from './../styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement((props) => {
    const { classes, color, name, handleClick } = props;
    return (
        <div className={classes.root} style={{ backgroundColor: color }}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <span>
                    {' '}
                    <DeleteForeverIcon
                        className={classes.deleteIcon}
                        onClick={handleClick}
                    />
                </span>
            </div>
        </div>
    );
});

export default withStyles(styles)(DraggableColorBox);
