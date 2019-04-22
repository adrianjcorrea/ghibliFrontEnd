//IMPORTING used components and libraries.
import React from 'react';
import FilmsList from './FilmsList.jsx';
import Scroll from '../utilities/Scroll.jsx';
import Autocomplete from  'react-autocomplete';
import { getFilms }from '../utilities/Data.js';

class Films extends React.Component{
  constructor() {
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

 //autoComplete functinality
  autoComplete = (e) => {
    const { searchfield } = this.state;

    return (
      <Autocomplete
        value={ searchfield }
        placeholder="search film"
        type='search'
        inputProps={{ id: 'states-autocomplete' }}
        items={ getFilms() }
        getItemValue={ item => item.name }
        onChange={(e, searchfield ) => this.setState({ searchfield }) }
        onSelect={ searchfield => this.setState({ searchfield }) }
        renderMenu={ children => (
          <div className = "menu">
            { children }
          </div>
        )}
        renderItem={ (item, isHighlighted) => (
          <div
            className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
            key={ item.abbr } >
            { item.name }
          </div>
        )}
      />
    );
  }

  render() {
    //Destructuring to use state.
    const { films } = this.state;
    //const imageid = ImageLink.filter
    const filteredFilms = films.filter(film => {
      //Will search by title name.
      return film.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    //While films load will display Loading.
    //When films are captured in state then will display app compontets.
    return !films.length ?
      <h1 className='loading'>LOadING...</h1> :
      (
        <div>
        <div className="autocomplete">
           <h3 className="search-header">Search Film here: </h3>
          <div className="input-complete">
           {this.autoComplete()}
          </div>
        </div>
          <h1 className='pageTitle'>Ghibli Films</h1>
            <Scroll >
              <FilmsList films={filteredFilms} autoComplete={this.autoComplete()} />
            </Scroll>
        </div>
      );
  }
}

export default Films;
