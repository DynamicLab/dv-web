import React, { Component } from 'react';
import logo from './logo.svg';
import {Title} from './component/title/Title';
import SearchBar from './component/searchbar/SearchBar';
import {airports} from './data/Airports';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  state={airports:'YOW'}

  setAirport = (state) => {
    this.setState({airports:state});
    console.log(`Print in App: ${state}`);
  }

  render() {
    console.log(airports);
    return (
      <div>
        <Grid container>
          <Grid item xs={2} spacing={8}/>
          <Grid item xs={2}>
            <Title title={this.state.airports} />
          </Grid>
          <Grid item xs={2} spacing={8}/>
          <Grid item xs={2} spacing={8}/>
          <Grid item xs={2} spacing={8}/>
          <Grid item xs={2} spacing={8}/>
        </Grid>
        <div style={{ display: 'flex', margin: 40, background: 'red'}}>
          <Grid container spacing={24} direction="column" justify="center">
            <Grid container item spacing={0} justify="center">
              <Grid item xs={4}>
                <SearchBar setAirport={this.setAirport}/>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
