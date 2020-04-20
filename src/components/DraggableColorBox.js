import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { SortableElement } from 'react-sortable-hoc';

const styles = {
    root: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        fontFamily: 'Barlow',
        marginBottom: '-4px',
        '&:hover svg': {
            color: '#fff',
            transform: 'scale(1.5)',
        },
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '10px',
        color: 'black',
        letterSpacing: '1.1px',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: '12px',
        '& span': {
            padding:
                '0 10px' /*this padding was causing an overflow and generating a horizontal scrollbar*/,
        },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deleteIcon: {
        color: 'rgba(0,0,0,0.5)',
        transition: 'all 0.2s ease-in-out',
    },
};

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
