import React, { Component } from 'react';
import Head from './components/Head';
import Body from './components/Body'
import './App.css';
import Data from './assets/data';
import cloneDeep from "clone-deep";

class App extends Component {
  state = {
    film:null,
    review:[0,0,0,0,0,0,0],
    marks:[[],[],[],[],[],[],[]]
  }

  onFilmHandler = (film)=>{
    console.log(film);
    this.setState({film});
  }

  onMarksHandler = (mark,film)=>{
    let sum = cloneDeep(this.state.review[film-1]);
    const marks = cloneDeep(this.state.marks);
    let review = cloneDeep(this.state.review);
    marks[film-1].push(mark);
    console.log(marks[film-1].length);
    console.log(marks);
    marks[film-1].forEach(obj => sum=obj+sum);
    console.log(sum);
    this.setState({marks});
    review[film-1]= Math.round(sum/marks[film-1].length);
    console.log(review);
    this.setState({review});
  }

  render() {
    return (
      <div className="App">
          <Head/>
          <Body data = {Data} film = {this.state.film} review = {this.state.review} marks = {this.state.marks} onClick = {{onFilm:this.onFilmHandler, onMarks:this.onMarksHandler}}/>
      </div>
    );
  }
}

export default App;
