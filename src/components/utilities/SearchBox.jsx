import React from 'react';

const SearchBox = ({ searchChange }) => {
  return(
      <div className='pa2'>
        <input
         className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'
         type='search'
         placeholder='Search For A Film'
         onChange={searchChange}
         />
      </div>
   );
}

export default SearchBox;
