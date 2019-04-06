  import React, { Component } from 'react';

  class App extends Component {

    render() {
    return (
      <div>
      <main class="grid" id="main">
        <section id="section-a">
          <h1 className="pageTitle">Welcome to Ghibli</h1>
          <div class="image"></div>
          <div id="img-caption"> Totoro, a character from My Neighbor Totoro, is the studios mascot.</div>
        </section>
        <section id="section-b" >
          <div >
            <p id="tribute-info">Studio Ghibli, Inc. (Japanese: 株式会社スタジオジブリ Hepburn: Kabushiki gaisha Sutajio Jiburi) is a Japanese animation film
              studio based in Koganei, Tokyo, Japan. The studio is best known for its anime feature films, and has also produced
              several short films, television commercials, and one television film. It was founded on 15 June 1985, after the
              success of Nausicaä of the Valley of the Wind (1984), with funding by Tokuma Shoten.
            </p>
            <span class="sitelink" id="tribute-link">
              Visit
              <a href="http://www.ghibli.jp/" target="_blank">Ghibli Studios website.</a>
            </span>
          </div>
      </section>
      </main>
      </div>
    );
   }
  }

  export default App;
