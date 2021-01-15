import React from 'react';

export default () => {

  let data = [{ a: 2 }];
  // fetch for projects
  // fetch('http://example.com/movies.json')
  //   .then(response => response.json())
  //   .then(data => console.log(data));

  const listItems = data.map((obj) =>
    <li>{obj.a}</li>
  );


  return (
    <div className="container">
      <h1>ProjectList</h1>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}
