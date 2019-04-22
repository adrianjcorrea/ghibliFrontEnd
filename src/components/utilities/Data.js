//Defining function to use in auto complete.
export function getFilms() {
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
  ];
}

//This function lets user search by name and abreviation.
export function matchFilms(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== 0 ||
    state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== 0
  );
}

export const imageSet = [
  {photo:'https://images-na.ssl-images-amazon.com/images/I/81zDita2ncL._SY679_.jpg',},
  {photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC68-pgMFvqh0SaXKWjOt7dAB6rHK2gTwjDIJzaOWOeWEr-s_tgQ',},
  {photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQziRNTRJFbN8U9H4-xlpgq9Uv_HLHA9DzWBNLawgFXeqTP4Qak',},
  {photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CUDPv20zETjcg26J8u-x_IFc8oOjbM-ytZOJwirOTmSHfRjY',},
  {photo:'https://fesapusewebsite.blob.core.windows.net/fathom/pm3-ebcc7fc25746777807a80210e22d95c8.jpg',},
  {photo:'http://www.movienewsletters.net/photos/072500R1.jpg',},
  {photo:'http://barkerhost.com/wp-content/uploads/sites/4/2015/06/tuKO2PLGDcJj5vpfAYKSQcnLEpD-0.jpg',},
  {photo:'https://fesapusewebsite.blob.core.windows.net/fathom/howls3-49077fb5f658a5c95332976cfc61ee48.jpg',},
  {photo:'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/from-up-on-poppy-hill.jpg?itok=seqcoEpX',},
  {photo:'https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg',},
  {photo:'https://fesapusewebsite.blob.core.windows.net/fathom/ponyo-1000x1480-r2-3c7dd4adc4c5119cdacef777caf4657a.jpg',},
  {photo:'https://m.media-amazon.com/images/M/MV5BOGJjNzZmMmUtMjljNC00ZjU5LWJiODQtZmEzZTU0MjBlNzgxL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',},
  {photo:'https://upload.wikimedia.org/wikipedia/en/4/46/OYpost.jpg',},
  {photo:'https://images-na.ssl-images-amazon.com/images/I/51qyfcSrd-L._SY445_.jpg',},
  {photo:'https://images-na.ssl-images-amazon.com/images/I/91Sruo1eOpL._SY445_.jpg'},
  {photo:'https://images-na.ssl-images-amazon.com/images/I/91DoU3%2BT-6L._SY445_.jpg',},
  {photo:'https://s22319.pcdn.co/wp-content/uploads/Kaguya-Hime_no_Monogatari_poster1.jpg',},
  {photo:'https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg',},
  {photo:'https://images-na.ssl-images-amazon.com/images/I/51Y9GA5ZTPL.jpg',},
  {photo:'https://images-na.ssl-images-amazon.com/images/I/51FfA9mOuiL._SX258_BO1,204,203,200_.jpg',},
];  