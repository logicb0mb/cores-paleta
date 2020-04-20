import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import ClearAllOutlinedIcon from '@material-ui/icons/ClearAllOutlined';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import DraggableColorBox from './DraggableColorBox';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
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
}));

export default function NewPaletteForm(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [currentColor, setCurrentColor] = React.useState('aquablue');
    const [colors, setColors] = React.useState([
        { color: 'blue', name: 'blue' },
    ]);
    const [newName, setNewName] = React.useState({
        colorName: '',
        paletteName: '',
    });

    useEffect(() => {
        // similar to componentDidMount
        ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
            colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );

        ValidatorForm.addValidationRule('isColorUnique', (value) =>
            colors.every(({ color }) => color !== currentColor)
        );

        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
            props.palettes.every(
                ({ paletteName }) =>
                    paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    });

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const updateCurrentColor = (newColor) => {
        setCurrentColor(newColor.hex);
    };

    const addNewColor = () => {
        const newColor = { color: currentColor, name: newName.colorName };
        setColors([...colors, newColor]);
        setNewName({ colorName: '', paletteName: newName.paletteName });
    };
    const handleChange = (evt) => {
        console.log(`inside`);
        setNewName({ ...newName, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = () => {
        let newPaletteName = newName.paletteName;
        const newPalette = {
            paletteName: newPaletteName,
            id: newPaletteName.toLowerCase().replace(/ /g, '-'),
            colors,
        };
        props.savePalette(newPalette);
        props.history.push('/');
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="default"
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar disableGutters={!open}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        className={classNames(
                            classes.menuButton,
                            open && classes.hide
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        Persistent drawer
                    </Typography>
                    <ValidatorForm onSubmit={handleSubmit}>
                        <TextValidator
                            label="Palette Name"
                            name="paletteName"
                            value={newName.paletteName}
                            onChange={handleChange}
                            validators={['required', 'isPaletteNameUnique']}
                            errorMessages={[
                                'Enter Palette Name',
                                'Name already used',
                            ]}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                        >
                            Save Palette
                        </Button>
                    </ValidatorForm>
                </Toolbar>
            </AppBar>
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
                <Typography variant="h4"> Design your own palette </Typography>
                <div>
                    <Button variant="contained" color="secondary">
                        Clear Palette
                        <ClearAllOutlinedIcon />
                    </Button>
                    <Button variant="contained" color="primary">
                        Random Color
                        <ShuffleIcon />
                    </Button>
                </div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={updateCurrentColor}
                />
                <ValidatorForm onSubmit={addNewColor}>
                    <TextValidator
                        value={newName.colorName}
                        name="colorName"
                        onChange={handleChange}
                        validators={[
                            'required',
                            'isColorNameUnique',
                            'isColorUnique',
                        ]}
                        errorMessages={[
                            'Enter a color name',
                            'Color names must be unique',
                            'Color already used',
                        ]}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: currentColor }}
                        type="submit"
                    >
                        Add Color
                        <AddCircleOutlineIcon />
                    </Button>
                </ValidatorForm>
            </Drawer>
            <main
                className={classNames(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

                {colors.map((color) => (
                    <DraggableColorBox
                        color={color.color}
                        name={color.name}
                    ></DraggableColorBox>
                ))}
            </main>
        </div>
    );
}