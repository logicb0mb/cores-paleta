import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './../styles/PaletteFooterStyles';

function PaletteFooter(props) {
    const { paletteName, emoji, classes } = props;
    return (
        <footer className={classes.PaletteFooter}>
            <span className={classes.PaletteFooterCopyright}>
                {' '}
                &copy;
                <a
                    className={classes.PaletteFooterLink}
                    href="https://github.com/logicb0mb"
                >
                    SHREYAS SHUKLA
                </a>{' '}
            </span>
            <div>
                {paletteName}
                <span className={classes.Emoji}>{emoji}</span>
            </div>
        </footer>
    );
}
export default withStyles(styles)(PaletteFooter);
