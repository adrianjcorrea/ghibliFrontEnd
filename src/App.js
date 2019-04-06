  import React, { Component } from 'react';

  class App extends Component {

    render() {
    return (
      <div>
      <main class="grid" id="main">
        <section id="section-a" class="grid">
          <h1 className="pageTitle">Welcome to Ghibli</h1>
          <div class="image"></div>
          <div id="img-caption"> Totoro, a character from My Neighbor Totoro, is the studios mascot.</div>
        </section>
      </main>
      </div>
    );
   }
  }

  export default App;
