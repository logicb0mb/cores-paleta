import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    findPalette = (id) => {
        return seedColors.find((palette) => palette.id === id);
    };

    render() {
        return (
            <Switch>
                {/* Order does matter in these routes becasue if i will place the new route below the Palette route then it will try for new as a palette id when teh client will visit the url (/new) */}
                <Route
                    exact
                    path="/palette/new"
                    render={() => <NewPaletteForm />}
                />
                <Route
                    exact
                    path="/"
                    render={(routeProps) => (
                        <PaletteList palettes={seedColors} {...routeProps} />
                    )}
                />
                <Route
                    exact
                    path="/palette/:id"
                    render={(routeProps) => (
                        <Palette
                            palette={generatePalette(
                                this.findPalette(routeProps.match.params.id)
                            )}
                        />
                    )}
                />
                <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={(routeProps) => (
                        <SingleColorPalette
                            palette={generatePalette(
                                this.findPalette(
                                    routeProps.match.params.paletteId
                                )
                            )}
                            colorId={routeProps.match.params.colorId}
                        />
                    )}
                />
            </Switch>
            // <div>
            //     <Palette palette={generatePalette(seedColors[4])} />
            // </div>
        );
    }
}

export default App;
