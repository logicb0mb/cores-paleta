import React from 'react';
import classNames from 'classnames';
import { arrayMove } from 'react-sortable-hoc';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import ClearAllOutlinedIcon from '@material-ui/icons/ClearAllOutlined';
import ShuffleIcon from '@material-ui/icons/Shuffle';

import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

import seedColors from './../seedColors';
import NewPaletteFormStyles from './../styles/NewPaletteFormStyles';

const useStyles = NewPaletteFormStyles;

NewPaletteForm.defaultProps = {
    maxColors: 20,
};

export default function NewPaletteForm(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [colors, setColors] = React.useState(seedColors[0].colors);
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

    let onSortEnd = ({ oldIndex, newIndex }) => {
        setColors(arrayMove(colors, oldIndex, newIndex));
    };

    const clearColors = () => {
        setColors([]);
    };

    const addRandomColor = () => {
        // pick random color from existing palettes
        const colorsToPick =
            props.palettes.length !== 0 ? props.palettes : seedColors;
        const allColors = colorsToPick.map((p) => p.colors).flat();
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
                    setColors={setColors}
                    axis="xy"
                    onSortEnd={onSortEnd}
                    distance={20}
                />
            </main>
        </div>
    );
}
