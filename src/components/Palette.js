import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import NavBar from './NavBar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import styles from './../styles/PaletteStyles';

import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex',
        };
    }
    changeLevel = (newLevel) => {
        this.setState({ level: newLevel });
    };
    changeColorFormat = (val) => {
        this.setState({ format: val });
    };
    render() {
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map((color) => (
            <ColorBox
                background={color[format]}
                name={color.name}
                key={color.id}
                moreUrl={`/palette/${id}/${color.id}`}
                showingFullPalette
            />
        ));
        return (
            <div className={classes.Palette}>
                <NavBar
                    level={level}
                    changeLevel={this.changeLevel}
                    changeColorFormat={this.changeColorFormat}
                    showingAllColors
                />
                <div className={classes.Palette__colors}>{colorBoxes}</div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}
export default withStyles(styles)(Palette);
