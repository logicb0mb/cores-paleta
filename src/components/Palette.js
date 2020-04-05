import React, { Component } from 'react';
import NavBar from './NavBar';
import ColorBox from './ColorBox';
import './Palette.css';

export default class Palette extends Component {
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
        const { colors } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map((color) => (
            <ColorBox background={color[format]} name={color.name} />
        ));
        return (
            <div className="Palette">
                <NavBar
                    level={level}
                    changeLevel={this.changeLevel}
                    changeColorFormat={this.changeColorFormat}
                />
                {/* Navbar goes here*/}
                <div className="Palette__colors">{colorBoxes}</div>
                {/* Footer */}
            </div>
        );
    }
}
