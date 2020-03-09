import React, { Component } from 'react';
import Head from './components/Head';
import Body from './components/Body'
import './App.css';
import Data from './assets/data';

class App extends Component {
  state = {
    film:null
  }

  onFilmHandler = (film)=>{
    console.log(film);
    this.setState({film});
  }

  render() {
    return (
      <div className="App">
          <Head/>
          <Body data = {Data} film = {this.state.film} onClick = {{onFilm:this.onFilmHandler}}/>
      </div>
    );
  }
}

export default App;
