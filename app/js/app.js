import React from 'react';
import ReactDom from 'react-dom';

import NameThis from './components/NameThis';
import Welcome from './components/Welcome';

class App extends React.Component {

  render(){
    return (
      <div>
        <NameThis />
        <Welcome />
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)
