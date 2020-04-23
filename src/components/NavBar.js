import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/styles';

import 'rc-slider/assets/index.css'; //this should be included before our own styles in order for edited styles (slider) to work
import styles from './../styles/NavBarStyles';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex',
            open: false,
        };
    }
    handleFormatChange = (event) => {
        this.setState({ format: event.target.value, open: true });
        this.props.changeColorFormat(event.target.value);
    };
    closeSnackBar = () => {
        this.setState({ open: false });
    };
    TransitionLeft(props) {
        return <Slide {...props} direction="left" />;
    }
    render() {
        const { level, changeLevel, showingAllColors, classes } = this.props;
        const { format, open } = this.state;
        return (
            <header className={classes.NavBar}>
                <div className={classes.logo}>
                    <Link to="/">cores-paleta</Link>
                </div>
                {showingAllColors && (
                    <div>
                        <span>Level: {level}</span>
                        <div className={classes.slider}>
                            <Slider
                                defaultValue={level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={changeLevel}
                            />
                        </div>
                    </div>
                )}
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">
                            RGBA - rgb(255,255,255,1.0)
                        </MenuItem>
                    </Select>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={open}
                        autoHideDuration={3000}
                        message={
                            <span id="message-id">
                                Format Changed To {format.toUpperCase()}
                            </span>
                        }
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        TransitionComponent={this.TransitionLeft}
                        action={[
                            <IconButton
                                onClick={this.closeSnackBar}
                                color="inherit"
                                key="close"
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>,
                        ]}
                        onClose={this.closeSnackBar}
                    ></Snackbar>
                </div>
            </header>
        );
    }
}
export default withStyles(styles)(NavBar);
