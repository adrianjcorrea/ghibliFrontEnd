import React from 'react';
import coverImage from './ImageLink.js';


const Card = ({title, description, director, producer, release_date, rt_score }) => {

  const coverUrl= function() {
    if(title === 'Castle in the Sky'){
  return( <img src={coverImage[0]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'Grave of the Fireflies'){
    return (<img src={coverImage[1]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'My Neighbor Totoro'){
    return (<img src={coverImage[2]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'Kiki\'s Delivery Service'){
    return (<img src={coverImage[3]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'Only Yesterday'){
    return (<img src={coverImage[4]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'Porco Rosso'){
    return (<img src={coverImage[5]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'Pom Poko'){
    return (<img src={coverImage[6]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'Whisper of the Heart'){
    return (<img src={coverImage[7]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'Princess Mononoke'){
    return (<img src={coverImage[8]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'My Neighbors the Yamadas'){
    return (<img src={coverImage[9]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'Spirited Away'){
    return (<img src={coverImage[10]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'The Cat Returns'){
    return (<img src={coverImage[11]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'Howl\'s Moving Castle'){
    return (<img src={coverImage[12]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'Tales from Earthsea'){
    return (<img src={coverImage[13]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'Ponyo'){
    return (<img src={coverImage[14]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'Arrietty'){
    return (<img src={coverImage[15]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'From Up on Poppy Hill'){
    return (<img src={coverImage[16]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'The Wind Rises'){
    return (<img src={coverImage[17]} style={{width: '10%', height: '10%'}} />);
  }else if(title === 'The Tale of the Princess Kaguya'){
    return (<img src={coverImage[18]} style={{width: '10%', height: '10%'}} />);
  }else{
    return (<img src={coverImage[19]} style={{width: '10%', height: '10%'}} />);
   }
  }

  return (
    <div className=' bg-blue dib br5 pa3 ma2 grow bw2 shadow-5 o-90 ba bw3 b--light-green pointer'
    style={{width: '60%', height: '20%'}}>
    {coverUrl()}
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
