export default {
    root: {
        backgroundColor: '#E52E62',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    container: {
        width: '66%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'black',
        '& a': {
            display: 'block',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: '800',
            fontSize: '1em',
            textTransform: 'uppercase',
            color: '#fff',
            borderRadius: '6px',
            margin: '10px',
            padding: '1em 3em',
            backgroundSize: '300% 300%',
            color: 'white',
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
        gridGap: '5%',
    },
};
