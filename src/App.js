import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm';
import Page from './components/Page';

import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import './App.css';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Barlow',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);
        const savedPalettes = JSON.parse(
            window.localStorage.getItem('palettes')
        );
        this.state = {
            palettes: savedPalettes || seedColors,
        };
    }

    findPalette = (id) => {
        return this.state.palettes.find((palette) => palette.id === id);
    };

    savePalette = (newPalette) => {
        this.setState(
            { palettes: [...this.state.palettes, newPalette] },
            this.syncLocalStorage
        );
    };

    deletePalette = (id) => {
        this.setState(
            (state) => ({
                palettes: state.palettes.filter((p) => p.id !== id),
            }),
            this.syncLocalStorage
        );
    };

    syncLocalStorage = () => {
        // save palettes to localStorage
        window.localStorage.setItem(
            'palettes',
            JSON.stringify(this.state.palettes)
        );
    };
    renderThis = ({ location }) => (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={700}>
                <ThemeProvider theme={theme}>
                    <Switch location={location}>
                        {/* Order does matter in these routes becasue if i will place the new route below the Palette route then it will try for new as a palette id when teh client will visit the url (/new) */}
                        <Route
                            exact
                            path="/palette/new"
                            render={(routeProps) => (
                                <Page>
                                    {console.log(this.state.palettes)}
                                    <NewPaletteForm
                                        savePalette={this.savePalette}
                                        palettes={this.state.palettes}
                                        {...routeProps}
                                    />
                                </Page>
                            )}
                        />
                        <Route
                            exact
                            path="/"
                            render={(routeProps) => (
                                <Page>
                                    <PaletteList
                                        palettes={this.state.palettes}
                                        {...routeProps}
                                        deletePalette={this.deletePalette}
                                    />
                                </Page>
                            )}
                        />
                        <Route
                            exact
                            path="/palette/:id"
                            render={(routeProps) => (
                                <Page>
                                    <Palette
                                        palette={generatePalette(
                                            this.findPalette(
                                                routeProps.match.params.id
                                            )
                                        )}
                                    />
                                </Page>
                            )}
                        />
                        <Route
                            exact
                            path="/palette/:paletteId/:colorId"
                            render={(routeProps) => (
                                <Page>
                                    <SingleColorPalette
                                        palette={generatePalette(
                                            this.findPalette(
                                                routeProps.match.params
                                                    .paletteId
                                            )
                                        )}
                                        colorId={
                                            routeProps.match.params.colorId
                                        }
                                    />
                                </Page>
                            )}
                        />
                        <Route
                            render={(routeProps) => (
                                <Page>
                                    <PaletteList
                                        palettes={this.state.palettes}
                                        {...routeProps}
                                        deletePalette={this.deletePalette}
                                    />
                                </Page>
                            )}
                        />
                    </Switch>
                </ThemeProvider>
            </CSSTransition>
        </TransitionGroup>
    );

    render() {
        return <Route render={this.renderThis} />;
    }
}

export default App;
