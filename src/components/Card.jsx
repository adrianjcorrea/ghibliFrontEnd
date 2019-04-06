import React from 'react';
import coverImage from './ImageLink.js';


class Card extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       isClicked: false
     }
  }

   cardOnChange = () => {
     const click = this.state.isClicked;
     if(click === false){
       this.setState({isClicked: true})
       console.log(this.state.isClicked)
     }else{
       this.setState({isClicked: false})
       console.log(this.state.isClicked)
     }

  }

  viewCardChange = () => {
    const {title, id, description, director, producer, release_date, rt_score} = this.props;
    if(this.state.isClicked === false){
      return(
        <div>
          <h2>{id}</h2>
          <h2>{title}</h2>
          <p>
          Click Image to flip and see description
          </p>
        </div>
    )
    }else if(this.state.isClicked === true){
      return (
         <div>
           <p>{description}</p>
           <p>{director}</p>
           <p>{producer}</p>
           <p>{release_date}</p>
           <p>{rt_score}</p>
           <p>
           Click Image to flip back
           </p>
        </div>
    )
   }
  }





  render(){
    console.log(this.coverUrl)
    const {title} = this.props

  return (

    <div  onClick={this.cardOnChange} className=' bg-blue dib br5 pa3 ma2 grow bw2 shadow-5 o-90 ba bw3 b--light-green pointer' style={{width: '60%', height: '20%'}}>
    {title === 'Castle in the Sky' ?
      <img src={coverImage[0]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'Grave of the Fireflies') ?
        <img src={coverImage[1]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'My Neighbor Totoro') ?
        <img src={coverImage[2]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'Kiki\'s Delivery Service') ?
        <img src={coverImage[3]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'Only Yesterday') ?
        <img src={coverImage[4]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'Porco Rosso') ?
        <img src={coverImage[5]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'Pom Poko') ?
        <img src={coverImage[6]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'Whisper of the Heart') ?
        <img src={coverImage[7]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'Princess Mononoke') ?
        <img src={coverImage[8]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'My Neighbors the Yamadas') ?
        <img src={coverImage[9]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'Spirited Away') ?
        <img src={coverImage[10]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'The Cat Returns') ?
        <img src={coverImage[11]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'Howl\'s Moving Castle') ?
        <img src={coverImage[12]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'Tales from Earthsea') ?
        <img src={coverImage[13]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'Ponyo') ?
        <img src={coverImage[14]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'Arrietty') ?
        <img src={coverImage[15]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'From Up on Poppy Hill') ?
        <img src={coverImage[16]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'The Wind Rises') ?
        <img src={coverImage[17]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :(title === 'The Tale of the Princess Kaguya') ?
        <img src={coverImage[18]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
     :
        <img src={coverImage[19]} alt="Film Cover"style={{width: '10%', height: '10%'}} />
    }
      {this.viewCardChange()}
    </div>

  );
 }
}

export default Card;
