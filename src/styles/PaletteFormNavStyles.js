import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH as drawerWidth } from './../constants';
import media from './media';
export default makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    hide: {
        display: 'none',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '63.7px',
    },

    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },
    navBtns: {
        marginRight: '1rem',
        '& a': {
            textDecoration: 'none',
        },
        [media.down('md')]: {
            marginRight: '.5rem',
        },
    },
    button: {
        margin: '0 0.5rem',
        [media.down('md')]: {
            margin: '0 0.2rem',
            padding: '0.3rem',
        },
    },
}));
