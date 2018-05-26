import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.css';
import {Title} from './component/title/Title';
import SearchBar from './component/searchbar/SearchBar';
import {airports} from './data/Airports';

class App extends Component {
  state={airports:''}

  setAirport = (state) => {
    this.setState({airports:state});
    console.log(`Print in App: ${state}`);
  }

  render() {
    console.log(airports);
    return (
      <div className={style.App}>
        <Title title={this.state.airports} />
        <header className={style.AppHeader}>
          <img src={logo} className={style.AppLogo} alt="logo" />
          <h1 className={style.AppTitle}>Welcome to React</h1>
        </header>
        <p className={style.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchBar setAirport={this.setAirport}/>
      </div>
    );
  }
}

export default App;
