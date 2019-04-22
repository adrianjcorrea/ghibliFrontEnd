//Importin card to define how content wil
import React from 'react';
import Card from './Card';

//Mapping films to get properties and values.
const FilmsList = ({ films }) => {
  //Card defines what will be displayed in card.
  return (
    <div>
      {
        films.map((cards, i) => {
          return (
            <Card
              key={i}
              title={films[i].title}
              description={films[i].description}
              director={films[i].director}
              producer={films[i].producer}
              releaseDate={films[i].release_date}
              rtScore={films[i].rt_score}
            />
          );
        })
      }
    </div>
  );
}

export default FilmsList;
