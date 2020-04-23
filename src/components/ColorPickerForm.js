import React, { useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';

import ColorPickerFormStyles from './../styles/ColorPickerFormStyles';

const useStyles = ColorPickerFormStyles;

function ColorPickerForm(props) {
    const classes = useStyles();
    const {
        paletteIsFull,
        handleChange,
        newName,
        setColors,
        setNewName,
        colors,
    } = props;

    const [currentColor, setCurrentColor] = React.useState('#130e3a');

    useEffect(() => {
        // similar to componentDidMount
        ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
            colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', (value) =>
            colors.every(({ color }) => color !== currentColor)
        );
    });

    const updateCurrentColor = (newColor) => {
        const r = newColor.rgb.r;
        const g = newColor.rgb.g;
        const b = newColor.rgb.b;
        const a = newColor.rgb.a;
        const rgbaColor = `rgba(${r},${g},${b},${a})`;
        setCurrentColor(rgbaColor);
    };

    const addNewColor = () => {
        const newColor = { color: currentColor, name: newName.colorName };
        setColors([...colors, newColor]);
        setNewName({ colorName: '', paletteName: newName.paletteName });
    };

    return (
        <div>
            <ValidatorForm onSubmit={addNewColor} instantValidate={false}>
                <TextValidator
                    className={classes.colorNameInput}
                    variant="filled"
                    placeholder="Color Name"
                    value={newName.colorName}
                    name="colorName"
                    onChange={handleChange}
                    validators={[
                        'required',
                        'isColorNameUnique',
                        'isColorUnique',
                    ]}
                    errorMessages={[
                        'Enter a color name',
                        'Color names must be unique',
                        'Color already used',
                    ]}
                />
                <Button
                    className={classes.addColor}
                    variant="contained"
                    color="primary"
                    style={{
                        backgroundColor: paletteIsFull ? 'grey' : currentColor,
                    }}
                    type="submit"
                    disabled={paletteIsFull}
                >
                    {paletteIsFull ? 'Palette Full' : 'Add Color'}
                </Button>
            </ValidatorForm>
            <ChromePicker
                className={classes.picker}
                color={currentColor}
                onChangeComplete={updateCurrentColor}
            />
        </div>
    );
}

export default ColorPickerForm;
