import chroma from 'chroma-js';
import media from './media';
export default {
    colorBox: {
        width: '20%',
        height: (props) => (props.showingFullPalette ? '25%' : '50%'),
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        fontFamily: 'Barlow',
        marginBottom: '-4px',

        '&:hover button': {
            opacity: 1,
        },
        [media.down('lg')]: {
            width: '25%',
            height: (props) => (props.showingFullPalette ? '20%' : '33.33%'),
        },
        [media.down('md')]: {
            width: '50%',
            height: (props) => (props.showingFullPalette ? '10%' : '20%'),
        },
        [media.down('xs')]: {
            width: '100%',
            height: (props) => (props.showingFullPalette ? '5%' : '10.72%'),
        },
    },
    copyText: {
        color: (props) =>
            chroma(props.background).luminance() >= 0.6 ? 'black' : 'white',
    },
    colorName: {
        color: (props) =>
            chroma(props.background).luminance() <= 0.06 ? 'white' : 'black',
    },
    seeMore: {
        color: (props) =>
            chroma(props.background).luminance() >= 0.6
                ? 'rgba(0, 0, 0, 0.6)'
                : 'white',
        background: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        border: 'none',
        right: '0px',
        bottom: '0px',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase',
        fontWeight: '500',
    },
    copyButton: {
        color: (props) =>
            chroma(props.background).luminance() >= 0.6 ? '#000' : 'white',
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '50%',
        left: '50%',
        marginTop: '-15px',
        marginLeft: '-50px',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        borderRadius: '5px',
        border: (props) =>
            chroma(props.background).luminance() >= 0.6
                ? '2px solid #000'
                : '2px solid hsla(0, 0%, 100%, 0.2)',
        opacity: '0',
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
                '10px' /*this padding was causing an overflow and generating a horizontal scrollbar*/,
        },
    },
    copyOverlay: {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transition: 'transform 0.7s ease-in-out',
        transform: 'scale(0.1)',
    },
    showOverlay: {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute',
    },
    copyMessage: {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: 'white',

        '& h1': {
            fontWeight: '400',
            textShadow: '1px 2px black',
            background: 'rgba(255, 255, 255, 0.2)',
            width: '100%',
            textAlign: 'center',
            marginBottom: '0',
            padding: '1rem',
            textTransform: 'uppercase',
            [media.down('xs')]: {
                fontSize: '6rem',
            },
        },
        '& p': {
            fontSize: '2rem',
            fontWeight: '100',
            opacity: '0.7',
        },
    },
    showCopyMessage: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '25',
        transition: 'all 0.4s ease-in-out 0.3s',
    },
};
