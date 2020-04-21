import React from 'react';
import classNames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import ClearAllOutlinedIcon from '@material-ui/icons/ClearAllOutlined';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import { arrayMove } from 'react-sortable-hoc';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        display: 'flex',
        alignItems: 'center',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: 'calc(100vh -  64px)',
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    container: {
        width: '90%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '1rem 2rem',
    },
    buttons: {
        width: '100%',
    },
    button: {
        width: '50%',
    },
}));

NewPaletteForm.defaultProps = {
    maxColors: 20,
};

export default function NewPaletteForm(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [colors, setColors] = React.useState(props.palettes[0].colors);
    const [newName, setNewName] = React.useState({
        colorName: '',
        paletteName: '',
    });

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleChange = (evt) => {
        console.log(`inside`);
        setNewName({ ...newName, [evt.target.name]: evt.target.value });
    };

    //deliberatley not moving this method to PaletteFormNav because then i have to pass down savePalette and routeProps two components down along with other state materials, that is not worth it better leave it here
    const handleSubmit = (newPalette) => {
        let newPaletteName = newName.paletteName;
        newPalette.id = newPaletteName.toLowerCase().replace(/ /g, '-');
        newPalette.colors = colors;
        props.savePalette(newPalette);
        props.history.push('/');
    };

    // TODO: can be moved to DraggableColorList later
    const removeColor = (colorName) => {
        setColors(colors.filter((color) => color.name !== colorName));
    };

    let onSortEnd = ({ oldIndex, newIndex }) => {
        setColors(arrayMove(colors, oldIndex, newIndex));
    };

    const clearColors = () => {
        setColors([]);
    };

    const addRandomColor = () => {
        // pick random color from existing palettes
        const allColors = props.palettes.map((p) => p.colors).flat();
        let rand = Math.floor(Math.random() * allColors.length);
        const randomColor = allColors[rand];
        setColors([...colors, randomColor]);
    };

    const paletteIsFull = colors.length >= props.maxColors;

    return (
        <div className={classes.root}>
            <PaletteFormNav
                open={open}
                palettes={props.palettes}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleDrawerOpen={handleDrawerOpen}
                newName={newName}
            />
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />

                <div className={classes.container}>
                    <Typography variant="h5">
                        {' '}
                        Design your own palette{' '}
                    </Typography>
                    <div className={classes.buttons}>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="secondary"
                            onClick={clearColors}
                            endIcon={<ClearAllOutlinedIcon />}
                        >
                            Clear Palette
                        </Button>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={addRandomColor}
                            disabled={paletteIsFull}
                            endIcon={<ShuffleIcon />}
                        >
                            Random Color
                        </Button>
                    </div>
                    <ColorPickerForm
                        paletteIsFull={paletteIsFull}
                        handleChange={handleChange}
                        newName={newName}
                        setNewName={setNewName}
                        colors={colors}
                        setColors={setColors}
                    />
                </div>
            </Drawer>
            <main
                className={classNames(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

                <DraggableColorList
                    colors={colors}
                    removeColor={removeColor}
                    axis="xy"
                    onSortEnd={onSortEnd}
                />
            </main>
        </div>
    );
}
