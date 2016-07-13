import React from 'react';
import { render } from 'react-dom';
import UFO from './UFO';
import Ship from './Ship';


class App extends React.Component {
  constructor() {
    super()
   
    this.state = {
      ufos: [],
      screen: { width: window.innerWidth, height: window.innerHeight },
      circleX: 0,
      circleY: 0,
      counter: 0
    };
  }

  componentDidMount() {
    requestAnimationFrame(() => {this.update()});
  }

  update = () => {
    this.setState({
      counter: this.state.counter + .01,
      circleX: Math.sin(this.state.counter) * 300,
      circleY: Math.cos(this.state.counter) * 100
    });

    requestAnimationFrame(() => {this.update()});
  }

  render() {
    const ufoStyle = {
      position: 'absolute',
      top: (100 + this.state.circleX).toString() + 'px',
      left: (500 + this.state.circleY).toString() + 'px'
    };
    const ufoStyle2 = {
      position: 'absolute',
      left: (500 + this.state.circleX).toString() + 'px',
      top: (200 + this.state.circleY).toString() + 'px'
    };
    const ufoStyle3 = {
      position: 'absolute',
      left: (500 + 2 * this.state.circleX).toString() + 'px',
      top: (400 + 2 * this.state.circleY).toString() + 'px'
    };
    const shipStyle = {
      position: 'absolute',
      left: '600px',
      top: '700px'
    }
    const galaxyStyle={ width: this.state.screen.width, height: this.state.screen.height };

    return (
      <div className="Galaxy" style={galaxyStyle}>
        <UFO width={130} height={55} ufoStyle={ufoStyle} />
        <UFO width={130} height={55} ufoStyle={ufoStyle2} />
        <UFO width={130} height={55} ufoStyle={ufoStyle3} />
        <Ship shipStyle={shipStyle} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
