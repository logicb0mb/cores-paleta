import media from './media';

export default {
    PaletteFooter: {
        backgroundColor: 'white',
        height: '7vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    PaletteFooterCopyright: {
        margin: '0 1rem',
        textDecoration: 'none',
    },
    PaletteFooterLink: {
        textDecoration: 'none',
        margin: '0 0.5rem',
        textTransform: 'uppercase',
        display: 'inline-block',
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: '#ffed58',
            boxShadow: '0 1rem 2rem rgba(#000, 0.4)',
            transform: 'rotate(-5deg) scale(1.3) translate(1rem)',
        },
        '&:active': {
            backgroundColor: '#ffed58',
            boxShadow: '0 1rem 2rem rgba(#000, 0.4)',
            transform: 'rotate(-5deg) scale(1.3) translate(1rem)',
        },
    },
    Emoji: {
        margin: '0.7rem',
    },
};
