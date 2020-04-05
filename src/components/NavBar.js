import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css'; //this should be included before our own styles in order for edited styles (slider) to work
import './NavBar.css';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex',
        };
    }
    handleChange = (event) => {
        this.setState({ format: event.target.value });
        this.props.changeColorFormat(event.target.value);
    };
    render() {
        const { level, changeLevel, changeColorFormat } = this.props;
        const { format } = this.state;
        return (
            <header className="NavBar">
                <div className="logo">
                    <a href="#">cores-paleta</a>
                </div>
                <div className="slider__container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="select__container">
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">
                            RGBA - rgb(255,255,255,1.0)
                        </MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}
