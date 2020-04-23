import media from './media';
export default {
    NavBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '8vh',
    },
    logo: {
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        backgroundColor: '#eceff1',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none',
            color: 'black',
        },
        [media.down('xs')]: {
            display: 'none',
        },
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem',
    },
    slider: {
        display: 'inline-block',
        width: '340px',
        margin: '0 10px',
        '& .rc-slider-rail': {
            height: '8px',
            background: '#9cecfb',
            // eslint-disable-next-line no-dupe-keys
            background: '-webkit-linear-gradient(to left,#000839,#00a8cc)',
            // eslint-disable-next-line no-dupe-keys
            background: 'linear-gradient(to left,#000839,#00a8cc)',
        },
        '& .rc-slider-track': {
            backgroundColor: 'transparent',
        },
        '& .rc-slider-handle,.rc-slider-handle:hover,.rc-slider-handle:focus,.rc-slider-handle:active': {
            backgroundColor: '#ffa41b',
            outline: 'none',
            border: '1px solid #ffa41b',
            boxShadow: 'none',
            width: '17px',
            height: '17px',
            marginLeft: '-7px',
            marginTop: '-5px',
        },
        [media.down('sm')]: {
            width: '150px',
        },
    },
};
