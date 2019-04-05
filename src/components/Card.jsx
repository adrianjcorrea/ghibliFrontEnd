import React from 'react';
import coverImage from './ImageLink.jsx';


const Card = ({title, description, director, producer, release_date, rt_score }) => {
  return (
    <div className=' bg-blue dib br5 pa3 ma2 grow bw2 shadow-5 o-90 ba bw3 b--light-green pointer'
    style={{width: '60%', height: '20%'}}>
    {title === 'Castle in the Sky' ?
      <img src={coverImage[0].a} style={{width: '10%', height: '10%'}} />
      :(title === 'Grave of the Fireflies') ?
      <img src={coverImage[1].a} style={{width: '10%', height: '10%'}} />
      :(title === 'My Neighbor Totoro') ?
      <img src={coverImage[2].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'Kiki\'s Delivery Service') ?
      <img src={coverImage[3].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'Only Yesterday') ?
      <img src={coverImage[4].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'Porco Rosso') ?
      <img src={coverImage[5].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'Pom Poko') ?
      <img src={coverImage[6].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'Whisper of the Heart') ?
      <img src={coverImage[7].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'Princess Mononoke') ?
      <img src={coverImage[8].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'My Neighbors the Yamadas') ?
      <img src={coverImage[9].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'Spirited Away') ?
      <img src={coverImage[10].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'The Cat Returns') ?
      <img src={coverImage[11].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'Howl\'s Moving Castle') ?
      <img src={coverImage[12].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'Tales from Earthsea') ?
      <img src={coverImage[13].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'Ponyo') ?
      <img src={coverImage[14].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'Arrietty') ?
      <img src={coverImage[15].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'From Up on Poppy Hill') ?
      <img src={coverImage[16].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'The Wind Rises') ?
      <img src={coverImage[17].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'The Tale of the Princess Kaguya') ?
      <img src={coverImage[18].a}  style={{width: '10%', height: '10%'}} />
      :(title === 'When Marnie Was There') ?
      <img src={coverImage[19].a}  style={{width: '10%', height: '10%'}} />
      :
      <img src={coverImage[19].a}  style={{width: '10%', height: '10%'}} />


    }
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
