import React from 'react';
import FilmsList from './FilmsList.jsx';
import SearchBox from '../utilities/SearchBox.jsx';
import Scroll from '../utilities/Scroll.jsx';

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
       <div className='tc'>
         <h1 className='pageTitle'>Ghibli Films</h1>
           <SearchBox searchChange={this.onSearchChange} />
           <Scroll >
             <FilmsList films={filteredFilms} />
           </Scroll>
       </div>
     );
 }
}
export default Films;
