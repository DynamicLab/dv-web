import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.css';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <header className={style.AppHeader}>
          <img src={logo} className={style.AppLogo} alt="logo" />
          <h1 className={style.AppTitle}>Welcome to React</h1>
        </header>
        <p className={style.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
