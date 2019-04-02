
import React from 'react';

const FilmsList = ({ films }) => {
  return (
    <div>
      <tbody>
        <tr>
          <td>id</td>
          <td>title</td>
          <td>director</td>
          <td>producer</td>
        </tr>
        {films.map((value, key) => (
          <tr>
            <td>{key + 1}</td>
            <td>{value.title}</td>
            <td>{value.director}</td>
            <td>{value.producer}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default FilmsList;
