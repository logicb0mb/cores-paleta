import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

function ColorPickerForm(props) {
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
        setCurrentColor(newColor.hex);
    };

    const addNewColor = () => {
        const newColor = { color: currentColor, name: newName.colorName };
        setColors([...colors, newColor]);
        setNewName({ colorName: '', paletteName: newName.paletteName });
    };

    return (
        <div>
            <ChromePicker
                color={currentColor}
                onChangeComplete={updateCurrentColor}
            />
            <ValidatorForm onSubmit={addNewColor}>
                <TextValidator
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
                    variant="contained"
                    color="primary"
                    style={{
                        backgroundColor: paletteIsFull ? 'grey' : currentColor,
                    }}
                    type="submit"
                    disabled={paletteIsFull}
                >
                    {paletteIsFull ? 'Palette Full' : 'Add Color'}
                    {paletteIsFull ? '' : <AddCircleOutlineIcon />}
                </Button>
            </ValidatorForm>
        </div>
    );
}

export default ColorPickerForm;
