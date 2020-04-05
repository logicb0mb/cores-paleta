import React, { Component } from 'react';
import NavBar from './NavBar';
import ColorBox from './ColorBox';
import './Palette.css';

export default class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
        };
    }
    changeLevel = (newLevel) => {
        this.setState({ level: newLevel });
    };
    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = colors[level].map((color) => (
            <ColorBox background={color.hex} name={color.name} />
        ));
        return (
            <div className="Palette">
                <NavBar level={level} changeLevel={this.changeLevel} />
                {/* Navbar goes here*/}
                <div className="Palette__colors">{colorBoxes}</div>
                {/* Footer */}
            </div>
        );
    }
}
