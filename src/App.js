  import React, { Component } from 'react';
  import FilmsList from './components/FilmsList'

  class App extends Component {
    constructor(){
      super();
       this.state = {
         films: []
       }
    }

    //Mounts all films.
    componentDidMount(){
      fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      .then(response => { this.setState({films: response})});
    }

    render() {
      const { films } = this.state
      const filteredFilms = films.filter(film => {
        return film.title
        console.log(film.title)
      })
      return !films.length ?
      <h1>Loading</h1> :

      (
         <div >
           <h1>Ghibli Films</h1>
             <FilmsList films={filteredFilms} />
         </div>
       );
   }
  }

  export default App;
