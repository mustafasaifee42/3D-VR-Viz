import React, { Component } from 'react';
import './App.css';
import './font-sizes.css';
import './@ibm/plex/css/ibm-plex.css';
import Content from './Content.js';
import Description from './Description.js';
import About from './About.js';
import { Switch, Route } from 'react-router-dom';
import cardData from './cardData.json';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    let arr = []
    for (let i = 1; i <= cardData.length; i++) {
      arr.push(i)
    }
    const descriptionRoute = arr
      .map((d, i) =>
        <Route exact path={`/${d}`} component={Description} key={i} />
      )
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/'>
            <img src="/img/logo.png" className="App-logo" alt="logo" />
          </Link>
          <Link to='/about' className="Menu-Item">
            About
          </Link>
          <a href='mailto:saifee.mustafa@gmail.com' className="Menu-Item">
            Suggest A Viz
          </a>
        </header>
        <Switch>
          <Route exact path='/' component={Content} />
          {descriptionRoute}
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
