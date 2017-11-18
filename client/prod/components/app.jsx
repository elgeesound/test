import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import List from './list.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onToggle: true
    }
  }

  componentDidMount() {
    this.send();
  }

  send() {
    axios.get('http://127.0.0.1:3000/')
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
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