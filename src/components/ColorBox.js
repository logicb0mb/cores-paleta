import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import './ColorBox.css';

const styles = {
    colorBox: {
        width: '20%',
        height: (props) => (props.showingFullPalette ? '25%' : '50%'),
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        fontFamily: 'Barlow',
        marginBottom: '-4px',

        '&:hover button': {
            opacity: 1,
        },
    },
    copyText: {
        color: (props) =>
            chroma(props.background).luminance() >= 0.6 ? 'black' : 'white',
    },
    colorName: {
        color: (props) =>
            chroma(props.background).luminance() <= 0.06 ? 'white' : 'black',
    },
    seeMore: {
        color: (props) =>
            chroma(props.background).luminance() >= 0.6
                ? 'rgba(0, 0, 0, 0.6)'
                : 'white',
        background: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        border: 'none',
        right: '0px',
        bottom: '0px',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase',
        fontWeight: '500',
    },
    copyButton: {
        color: (props) =>
            chroma(props.background).luminance() >= 0.6 ? '#000' : 'white',
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '50%',
        left: '50%',
        marginTop: '-15px',
        marginLeft: '-50px',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        borderRadius: '5px',
        border: (props) =>
            chroma(props.background).luminance() >= 0.6
                ? '2px solid #000'
                : '2px solid hsla(0, 0%, 100%, 0.2)',
        opacity: '0',
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '10px',
        color: 'black',
        letterSpacing: '1.1px',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: '12px',
        '& span': {
            padding:
                '10px' /*this padding was causing an overflow and generating a horizontal scrollbar*/,
        },
    },
    copyOverlay: {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transition: 'transform 0.7s ease-in-out',
        transform: 'scale(0.1)',
    },
    showOverlay: {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute',
    },
    copyMessage: {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: 'white',

        '& h1': {
            fontWeight: '400',
            textShadow: '1px 2px black',
            background: 'rgba(255, 255, 255, 0.2)',
            width: '100%',
            textAlign: 'center',
            marginBottom: '0',
            padding: '1rem',
            textTransform: 'uppercase',
        },
        '& p': {
            fontSize: '2rem',
            fontWeight: '100',
            opacity: '0.7',
        },
    },
    showCopyMessage: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '25',
        transition: 'all 0.4s ease-in-out 0.3s',
    },
};

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
    }
    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        });
    };
    render() {
        const {
            name,
            background,
            moreUrl,
            showingFullPalette,
            classes,
        } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className={classes.colorBox}>
                    <div
                        style={{ background }}
                        className={`${classes.copyOverlay} ${
                            copied && classes.showOverlay
                        }`}
                    />
                    <div
                        className={`${classes.copyMessage} ${
                            copied && classes.showCopyMessage
                        }`}
                    >
                        <h1>copied!</h1>
                        <p className={classes.copyText}>
                            {this.props.background}
                        </p>
                    </div>

                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showingFullPalette && (
                        <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
                            <span className={classes.seeMore}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

export default withStyles(styles)(ColorBox);
