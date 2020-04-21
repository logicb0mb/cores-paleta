import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function PaletteMetaForm(props) {
    const [openDialog, setOpenDialog] = React.useState(true);

    const { handleSubmit, handleChange, newName, palettes } = props;
    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
            props.palettes.every(
                ({ paletteName }) =>
                    paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    });

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Choose a Palette Name
                </DialogTitle>
                <ValidatorForm onSubmit={handleSubmit}>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a name for the beautiful palette you
                            just created. Make sure it's unique!
                        </DialogContentText>
                        <TextValidator
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
                        <Button onClick={handleClose} color="primary">
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
