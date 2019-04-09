  import React, { Component } from 'react';
  import {imageSet} from './components/utilities/Data.js';


  class App extends Component {

    render() {
    return (
      <div>
        <main className="grid" id="main">
          <section id="section-a">
            <h1 classNameName="pageTitle">Welcome to Studio Ghibli</h1>
            {imageSet.map((e,i)=>
              <img src={imageSet[i].photo}
              alt="Film Cover"
              style={{width: '10%', height: '10%'}}
             />
           )}
            <div id="img-caption">Ghibli studios Films.</div>
          </section>
          <section id="section-b" >
            <div >
              <p id="tribute-info">Studio Ghibli, Inc. (Japanese: 株式会社スタジオジブリ Hepburn: Kabushiki gaisha Sutajio Jiburi) is a Japanese animation film
                studio based in Koganei, Tokyo, Japan. The studio is best known for its anime feature films, and has also produced
                several short films, television commercials, and one television film. It was founded on 15 June 1985, after the
                success of Nausicaä of the Valley of the Wind (1984), with funding by Tokuma Shoten.
              </p>
              <span className="sitelink" id="tribute-link">
                Visit
                <a href="http://www.ghibli.jp/" target="_blank">Ghibli Studios website.</a>
              </span>
            </div>
          </section>
          <section id="section-c" className="grid">
            <ul>
              <li>
                <div className="card">
                  <div className="card-content">
                    <h3 className="card-title">Ghibli History</h3>
                    <div className="card-imgwrap"></div>
                    <p>Studio Ghibli was founded in 1985 in Tokyo by the three men, Isao Takahata, Toshio Suzuki and the well-known film producer Hayao Miyazaki. The name Studio Ghibli was based on the Arabic name for "hot sahara wind" because the founders wanted Studio Ghibli to blow new wind through the anime industry.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <div className="card-content">
                    <h3 className="card-title">Pre Ghibli Films</h3>
                    <div className="card-imgwrap"></div>
                      <p>Prince of the Sun The Little Norse Prince (1968)</p>
                      <p>The Flying Phantom Ship (1969)</p>
                      <p>The Castle of Cagliostro (1979)</p>
                      <p>Panda! Go Panda! (1972)</p>
                      <p>Future Boy Conan (1978)</p>
                      <p>Nausicaä of the Valley of the Wind (1984)</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <div className="card-content">
                    <h3 className="card-title">Ghibli Museum</h3>
                    <div className="card-imgwrap"></div>
                    <p>Open the door and welcome to wonderland! Every window and lamp is lovingly hand-crafted with beautiful and colorful stained glass using Ghibli characters, pretty plants and flowers, and forest animals. When the sun is shining, the vivid colors of the glass are reflected in splashes of colored light on the stone floors.</p>
                    <a href="http://www.ghibli-museum.jp/en/info" target="_blank" rel="noopener noreferrer" >Ghibli Studios Museum website.</a>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section id="section-d" className="grid">
            <div className='content'>
              <h3 className='iframe-header'>Studio Ghiblis top 10 movies</h3>
              <div className="iframe-cont">
                <iframe src="https://www.youtube.com/embed/xJWLxxD0Hp8"
                  title="ghibliTopTen"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen></iframe>
              </div>
            </div>
          </section>
        </main>
        <footer id="main-footer">
   <p>Copyright © 2018 Ghiblis Fan</p>
 </footer>
</div>
    );
   }
  }

  export default App;
