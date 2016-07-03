import React from 'react';
import { render } from 'react-dom';

class Pirate extends React.Component {
  constuctor(props){
    super(props);
  }

  render() {
    return <h1>Welcome to the Party!</h1>;
  }
}

render(<Pirate />, document.getElementById('app'));
