import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
     this.state = {
       data: []
     }
  }

  componentDidMount(){
    this.getMovies();
  }

  getMovies(){
    fetch("https://ghibliapi.herokuapp.com/films", {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => { this.setState({data: response})});
  }

  allFilms(){

  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        <header>
         <h1></h1>
        </header>
      </div>
    );
  }
}

export default App;
