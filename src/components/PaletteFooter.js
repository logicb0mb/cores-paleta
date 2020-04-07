import React from 'react';

export default function PaletteFooter(props) {
    const { paletteName, emoji } = props;
    return (
        <footer className="Palette__footer">
            <span className="Palette__footer--copyright">
                {' '}
                &copy;
                <a
                    className="Palette__footer--link"
                    href="https://github.com/logicb0mb"
                >
                    SHREYAS SHUKLA
                </a>{' '}
            </span>
            <div>
                {paletteName}
                <span className="emoji">{emoji}</span>
            </div>
        </footer>
    );
}
