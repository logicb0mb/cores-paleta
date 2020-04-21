import media from './media';
export default {
    root: {
        width: '20%',
        height: '25%',
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
        '&:nth-last-child(-n+4)': {
            height: '25.2%', // wrote this for last 4 colorboxes so that full viewport is covered and no vertical scroll occurs
        },
        [media.down('lg')]: {
            width: '25%',
            height: '20%',
            '&:nth-last-child(-n+4)': {
                height: '20.2%', // wrote this for last 4 colorboxes so that full viewport is covered and no vertical scroll occurs
            },
        },
        [media.down('md')]: {
            width: '50%',
            height: '10%',
            '&:nth-last-child(-n+4)': {
                height: '10.2%', // wrote this for last 4 colorboxes so that full viewport is covered and no vertical scroll occurs
            },
        },
        [media.down('sm')]: {
            width: '100%',
            height: '5%',
            '&:nth-last-child(-n+4)': {
                height: '5.2%', // wrote this for last 4 colorboxes so that full viewport is covered and no vertical scroll occurs
            },
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
