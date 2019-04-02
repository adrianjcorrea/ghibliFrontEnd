import React from 'react';

const Card = ({title, description, director, producer, release_date, rt_score }) => {
  return (
    <div >
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{director}</p>
        <p>{producer}</p>
        <p>{release_date}</p>
        <p>{rt_score}</p>
      </div>
    </div>
  );
}

export default Card;
