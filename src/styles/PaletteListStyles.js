import media from './media';
import bg from './bg.svg';
export default {
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        /* background by SVGBackgrounds.com */
        // backgroundColor: '#2d2553',
        backgroundColor: '#0C2461',
        backgroundImage: `url(${bg})`,
        overflowY: 'scroll',
        overflowX: 'hidden',
    },
    heading: {
        fontSize: '2rem',
    },
    container: {
        width: '66%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [media.down('lg')]: {
            width: '80%',
        },
        [media.down('xs')]: {
            width: '75%',
        },
    },
    nav: {
        display: 'flex',
        fontFamily: 'Barlow',
        fontWeight: '300',
        letterSpacing: '.1rem',
        textTransform: 'uppercase',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        '& a': {
            display: 'block',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: '800',
            fontSize: '1em',
            textTransform: 'uppercase',
            borderRadius: '6px',
            margin: '10px',
            padding: '1em 3em',
            backgroundSize: '300% 300%',
            boxShadow:
                '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',

            backgroundImage:
                'linear-gradient(to right, #895cf2 0%, #ffabf4 50%, #895cf2 100%)',
            transition: '0.5s',
            backgroundImage:
                'repeating-linear-gradient(-45deg, #7BDFF2 10px 30px,#B2F7EF 30px 50px,#EFF7F6 50px 70px,#F7D6E0 70px 90px,#F2B5D4 90px 110px)',
            color: '#130e3a',

            '&:hover': {
                backgroundPosition: '20% center',
            },
        },
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,30%)',
        gridGap: '2.8rem',
        [media.down('md')]: {
            gridTemplateColumns: 'repeat(2, 50%)',
        },
        [media.down('xs')]: {
            gridTemplateColumns: 'repeat(1, 100%)',
            gridGap: '1.8rem',
        },
    },
};
