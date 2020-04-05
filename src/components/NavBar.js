import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css'; //this should be included before our own styles in order for edited styles (slider) to work
import './NavBar.css';
export default class NavBar extends Component {
    render() {
        const { level, changeLevel } = this.props;
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
            </header>
        );
    }
}
