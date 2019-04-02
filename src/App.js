import React, { Component } from 'react';

class App extends Component {

  componentDidMount(){
    fetch("https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
    .then(data => { data.json()
    console.log(data)
  })
  }

  render() {
    return (
      <div>
        <header>

        </header>
      </div>
    );
  }
}

export default App;
