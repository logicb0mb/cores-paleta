import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css'; //this should be included before our own styles in order for edited styles (slider) to work
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
                <div className="slider">
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={this.changeLevel}
                    />
                </div>
                {/* Navbar goes here*/}
                <div className="Palette__colors">{colorBoxes}</div>
                {/* Footer */}
            </div>
        );
    }
}
