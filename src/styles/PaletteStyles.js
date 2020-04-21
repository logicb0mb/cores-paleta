import media from './media';
export default {
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    Palette__colors: {
        height: '85%',
    },
    goBack: {
        width: '20%',
        height: '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        fontFamily: 'Barlow',
        marginBottom: '-4px',
        opacity: 1,
        backgroundColor: 'black',

        '& a': {
            color: '#fff',
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
            border: '2px solid #000',
        },
        [media.down('lg')]: {
            width: '25%',
            height: '33.33%',
        },
        [media.down('md')]: {
            width: '50%',
            height: '20%',
        },
        [media.down('xs')]: {
            width: '100%',
            height: '7%',
        },
    },
};
