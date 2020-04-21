import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';

import PaletteFormNavStyles from './../styles/PaletteFormNavStyles';

const useStyles = PaletteFormNavStyles;

function PaletteFormNav(props) {
    const [formShowing, setFormShowing] = useState(false);
    const classes = useStyles();
    const {
        open,
        palettes,
        handleChange,
        handleSubmit,
        handleDrawerOpen,
        newName,
    } = props;

    const showForm = () => {
        setFormShowing(true);
    };
    const hideForm = () => {
        setFormShowing(false);
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
                        Create a Palette
                    </Typography>
                </Toolbar>
                <div className={classes.navBtns}>
                    <Link to="/">
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                        >
                            Go Back
                        </Button>
                    </Link>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={showForm}
                    >
                        Save Palette
                    </Button>
                </div>
            </AppBar>

            {formShowing && (
                <PaletteMetaForm
                    handleSubmit={handleSubmit}
                    newName={newName}
                    handleChange={handleChange}
                    palettes={palettes}
                    hideForm={hideForm}
                />
            )}
        </div>
    );
}

export default PaletteFormNav;
