import chroma from 'chroma-js';

import media from './media';
export default {
    root: {
        width: '20%',
        height: '25.2%',
        margin: '-1px auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        fontFamily: 'Barlow',
        marginBottom: '-4px',
        '&:hover svg': {
            color: '#fff',
            transform: 'scale(1.5)',
        },
        // '&:nth-last-child(-n+5)': {
        //     height: '25.7%', // wrote this for last 4 colorboxes so that full viewport is covered and no vertical scroll occurs
        // },
        [media.down('lg')]: {
            width: '25%',
            height: '20.2%',
        },
        [media.down('md')]: {
            width: '50%',
            height: '10.2%',
        },
        [media.down('sm')]: {
            width: '100%',
            height: '5.2%',
        },
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '10px',
        color: (props) =>
            chroma(props.color).luminance() <= 0.06 ? 'white' : 'black',
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
