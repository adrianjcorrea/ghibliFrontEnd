import React from 'react';
import FilmsList from './FilmsList.jsx';
import Scroll from '../utilities/Scroll.jsx';
import Autocomplete from  'react-autocomplete';
import { matchFilms, getFilms }from '../utilities/Data.js';

class Films extends React.Component{
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

  autoComplete = () => {
    const { searchfield } = this.state;

    return (
      <Autocomplete
         value={ searchfield }
         inputProps={{ id: 'states-autocomplete' }}
         items={ getFilms() }
         getItemValue={ item => item.name }
         shouldItemRender={ matchFilms }
         onChange={(event, searchfield ) => this.setState({ searchfield }) }
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
    )
  }

  render() {
    //Destructuring to use state.
    const { films } = this.state;
    //const imageid = ImageLink.filter
    const filteredFilms = films.filter(film => {
      //Will search by title name.
      return film.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    //While films load will display Loading.
    //When films are captured in state then will display app compontets.
    return !films.length ?
    <h1 className='loading'>LOadING...</h1> :

    (
       <div>
         <div className="fr  ma1 ">
          {this.autoComplete()}
         </div>
         <h1 className='pageTitle fc w-100'>Ghibli Films</h1>
           <Scroll >
             <FilmsList films={filteredFilms} autoComplete={this.autoComplete()} />
           </Scroll>
       </div>
     );
 }
}
export default Films;
