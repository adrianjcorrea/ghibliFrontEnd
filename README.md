# ghibliFrontEnd

 using [GhibliStudioApi].(https://ghibliapi.herokuapp.com/), created a simple web app that lists all Ghibli studios movies plus more information on Ghibli Studio including YouTube video.

 Also lets user search for a certain movie by title or title initials.



## architecture

-[ReactBoilerplate].(https://github.com/facebook/create-react-app), used to set up react.

-[ReactAutocomplete].(https://github.com/reactjs/react-autocomplete), for   easier movie searching.

-[React-Router-Dom].(https://reacttraining.com/react-router/web/guides/quick-start), to link between Home and  Films.

-[Tachyons].(https://tachyons.io/), initially used for styling, then transferred to pure css


## Installation Steps

1. Clone repository

2. Run `npm install`

3. Start the server with `npm start`

4. Visit [http://localhost:3000/](http://localhost:3000/)



## Heroku link

[Ghibli].(https://evening-eyrie-46737.herokuapp.com/), Deployed on Heroku



## Main Complication

Autocomplete had never implemented autocomplete functionality, therefore it was interesting.

-Solution was react-autocomplete library.


## Trade Offs

I wanted to have the specific title cover only displayed and when clicked on it flip to the film information. The problem was when I did autocomplete the exact cover image wouldn't be displayed on the exact film info.

So I used conditional statements to add exact cover, but I do know that if more time I can destructure the code and refactor. So that auto complete wont distort cover implementation.


## Im the most proud of

I saw in github many ghibli app using the same API and none of them had photos. I was Able to add film cover and make a nice view for user when searching for a movie.
