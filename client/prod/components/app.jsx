import React from 'react';
import ReactDOM from 'react-dom';

import List from './list.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onToggle: true
    }
  }

  render(){
    return (
      <div>
        <List />
      </div>
      )
  }
}

export default App;