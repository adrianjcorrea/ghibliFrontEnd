import React from 'react';

const Card = ({title, description, director, producer, release_date, rt_score}) => {
  return (
    <div className='tc bg-blue dib br3 pa3 ma2 grow bw2 shadow-5 o-90 ba bw3 b--light-green pointer'>
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
