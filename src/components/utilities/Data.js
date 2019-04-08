export function getFilms(){
return [
 {abbr:"CitS", name:"Castle in the Sky"},
 {abbr:"GotF", name:"Grave of the Fireflies"},
 {abbr:"MNT", name:"My Neighbor Totoro"},
 {abbr:"KDS", name:"Kiki's Delivery Service"},
 {abbr:"PR", name:"Porco Rosso"},
 {abbr:"PP", name:"Pom Poko"},
 {abbr:"WotH", name:"Whisper of the Heart"},
 {abbr:"PM", name:"Princess Mononoke"},
 {abbr:"MNtY", name:"My Neighbors the Yamadas"},
 {abbr:"SA", name:"Spirited Away"},
 {abbr:"TCR", name:"The Cat Returns"},
 {abbr:"HMC", name:"Howl's Moving Castle"},
 {abbr:"TfE", name:"Tales from Earthsea"},
 {abbr:"Pon", name:"Ponyo"},
 {abbr:"Arr", name:"Arrietty"},
 {abbr:"FUoPH", name:"From Up on Poppy Hill"},
 {abbr:"TWR", name:"The Wind Rises"},
 {abbr:"TTotPK", name:"The Tale of the Princess Kaguya"},
 {abbr:"WMWT", name:"When Marnie Was There"}
]
}

export function matchFilms(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}
