
import React from 'react';
import Card from './Card';

const FilmsList = ({ films, autoComplete }) => {
  return (
    <div>
      {
        films.map((cards, i) => {
          return (
            <div>
              <Card
              title={films[i].title}
              description={films[i].description}
              director={films[i].director}
              producer={films[i].producer}
              release_date={films[i].release_date}
              rt_score={films[i].rt_score}
              />
            </div>
          );
        })
      }
    </div>
  );
}


export default FilmsList;
