import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Title } from '../title/Title';
import SearchBar from '../searchbar/SearchBar';
import { airports } from '../../data/Airports';

export class DashBoard extends Component {
    state = { airports: 'YOW' }

    setAirport = (state) => {
        this.setState({ airports: state });
        console.log(`Print in App: ${state}`);
    }

    render() {
        console.log(airports);
        return (
            <div>
                {/* title */}
                <Grid container spacing={8}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs>
                        <Title title={this.state.airports} />
                    </Grid>
                </Grid>

                {/* search bar */}
                <Grid container spacing={8} direction="column" justify="center" alignment="center">
                    <Grid container item spacing={0} justify="center">
                        <Grid item xs={4}>
                            <SearchBar setAirport={this.setAirport} />
                        </Grid>
                    </Grid>
                </Grid>

            </div>
        )
    }
}
