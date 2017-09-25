import React from 'react';
import ReactDom from 'react-dom'


const Welcome = ((props) =>
<h1>Hi {props.name}</h1>
)

const App = (() => {
  const nameArray = ["Torin", "Cayla", "Marple"]
  return (
    <div>
      <ul>
        {nameArray.map(name =>
          <li>{name}</li>
        )}
      </ul>
      <Welcome name="Torin" />
    </div>
  )
})

ReactDom.render(
  <App />,
  document.getElementById('app')
)
