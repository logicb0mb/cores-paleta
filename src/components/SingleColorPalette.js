import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';

export default class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(
            this.props.palette,
            this.props.colorId
        );
        this.state = {
            format: 'hex',
        };
    }
    gatherShades = (palette, colorToFilterBy) => {
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter((color) => color.id === colorToFilterBy)
            );
        }
        // return all shades of given color
        return shades.slice(1); //used slice to remove the first elemt of array with level 50, we dont want it
    };
    changeColorFormat = (val) => {
        this.setState({ format: val });
    };
    render() {
        const { format } = this.state;
        const { paletteName, emoji } = this.props.palette;
        const colorBoxes = this._shades.map((color) => (
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[format]}
                showLink={false}
            />
        ));
        return (
            <div className="Palette">
                <NavBar
                    changeColorFormat={this.changeColorFormat}
                    showingAllColors={false}
                />
                <div className="Palette__colors">{colorBoxes}</div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}
