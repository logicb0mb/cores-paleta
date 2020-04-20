import React, { useEffect } from 'react';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
function PaletteFormNav(props) {
    const {
        classes,
        open,
        handleChange,
        handleSubmit,
        handleDrawerOpen,
        newName,
    } = props;

    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
            props.palettes.every(
                ({ paletteName }) =>
                    paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    });

    return (
        <div>
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
                        <Link to="/">
                            <Button variant="contained" color="primary">
                                Go Back
                            </Button>
                        </Link>
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
        </div>
    );
}

export default PaletteFormNav;