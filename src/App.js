  import React, { Component } from 'react';
  import FilmsList from './components/FilmsList.jsx';
  import SearchBox from './components/SearchBox.jsx';

  class App extends Component {
    constructor(){
      super();
       this.state = {
         //Saving api response obj in films array.
         films: [],
         searchfield: ''
       }
    }

    //Mounts all films.
    componentDidMount(){
      //Accesing Api ang getting response using fetch method
      fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      //Setting Response to state.films
      .then(response => { this.setState({films: response})});
    }

    onSearchChange = (event) => {
      this.setState({searchfield: event.target.value})
    }

    render() {
      //Destructuring to use state.
      const { films } = this.state;
      //const imageid = ImageLink.filter
      const filteredFilms = films.filter(film => {
        //Will search by title name.
        console.log(films);
        return film.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
      //While films load will display Loading.
      //When films are captured in state then will display app compontets.
      return !films.length ?
      <h1 className='loading'>LOadING...</h1> :

      (
         <div className='tc'>
           <h1 className='loading'>Ghibli Films</h1>
             <SearchBox searchChange={this.onSearchChange} />
             <FilmsList films={filteredFilms} />
         </div>
       );
   }
  }

  export default App;
