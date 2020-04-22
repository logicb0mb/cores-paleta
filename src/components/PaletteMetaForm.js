import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export default function PaletteMetaForm(props) {
    const [stage, setStage] = React.useState('form');

    const { handleSubmit, handleChange, newName, palettes, hideForm } = props;
    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
            props.palettes.every(
                ({ paletteName }) =>
                    paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    });

    const showEmojiPicker = () => {
        setStage('emoji');
    };

    const submitPalette = (emoji) => {
        const newPalette = {
            paletteName: newName.paletteName,
            emoji: emoji.native,
        };
        handleSubmit(newPalette);
        setStage('');
    };
    return (
        <div>
            <Dialog open={stage === 'emoji'}>
                <DialogTitle id="form-dialog-title">
                    Choose an emoji for your palette
                </DialogTitle>
                <Picker onSelect={submitPalette} title="Pick a palette emoji" />
            </Dialog>
            <Dialog
                open={stage === 'form'}
                aria-labelledby="form-dialog-title"
                onClose={hideForm}
            >
                <DialogTitle id="form-dialog-title">
                    Choose a Palette Name
                </DialogTitle>
                <ValidatorForm onSubmit={showEmojiPicker}>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a name for the beautiful palette you
                            just created. Make sure it's unique!
                        </DialogContentText>
                        <TextValidator
                            autoFocus
                            fullWidth
                            label="Palette Name"
                            margin="normal"
                            name="paletteName"
                            value={newName.paletteName}
                            onChange={handleChange}
                            validators={['required', 'isPaletteNameUnique']}
                            errorMessages={[
                                'Enter Palette Name',
                                'Name already used',
                            ]}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={hideForm} color="primary">
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                        >
                            Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    );
}
