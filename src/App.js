  import React, { Component } from 'react';
  import {NavLink} from 'react-router-dom';

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
      <section id="section-c" class="grid">
        <ul>
          <li>
            <div class="card">
              <div class="card-content">
                <h3 class="card-title">History</h3>
                <div class="card-imgwrap"></div>
                <p>Studio Ghibli was founded in 1985 in Tokyo by the three men, Isao Takahata, Toshio Suzuki and the well-known film producer Hayao Miyazaki. The name Studio Ghibli was based on the Arabic name for "hot sahara wind" because the founders wanted Studio Ghibli to blow new wind through the anime industry.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="card">
              <div class="card-content">
                <h3 class="card-title">Movies</h3>
                <div class="card-imgwrap"></div>
                <p>Go to Movies Listed </p>
                <NavLink to="Films">Films</NavLink>
              </div>
            </div>

          </li>
          <li>
            <div class="card">
              <div class="card-content">
                <h3 class="card-title">Museum</h3>
                <div class="card-imgwrap"></div>
                <a href="http://www.ghibli-museum.jp/en/info" target="_blank">Ghibli Studios website.</a>
                <p></p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      </main>
      </div>
    );
   }
  }

  export default App;
