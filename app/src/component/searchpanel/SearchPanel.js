import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Title } from '../title/Title';
import SearchBar from '../searchbar/SearchBar';

export default class SearchPanel extends Component {
  state = {
    airports: "YOW"
  }

  setAirport = state => {
    this.setState({ airports: state });
    console.log(`Print in DashBoard: ${state}`);
  }

  render() {
    return (
      <div>
        {/* title */}
        <Grid container spacing={8}>
          <Grid item xs={1} />
          <Grid item xs>
            <Title title={this.state.airports} />
          </Grid>
        </Grid>

        {/* search bar */}
        <Grid
          container
          spacing={8}
          direction="column"
          justify="center"
          alignContent="center"
        >
          <Grid container item spacing={0} justify="center" alignItems="center">
            <Grid item xs={4}>
              <SearchBar setAirport={this.setAirport} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
