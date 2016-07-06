import React from 'react';
import { render } from 'react-dom';

class UFO {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  render(state) {
    // Draw
    console.log(state);
    const context = state.context;
    context.save();
    context.translate(this.x, this.y);
    // context.rotate(this.rotation * Math.PI / 180);
    context.strokeStyle = 'red';
    context.fillStyle = 'yellow';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(0, -15);
    context.lineTo(10, 10);
    context.lineTo(5, 7);
    context.lineTo(-5, 7);
    context.lineTo(-10, 10);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
  }
}



class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = { screen: { width: window.innerWidth, height: window.innerHeight } };
  }

  
  componentDidMount() {
    console.log('Hello Canvas Mounted');
    const context = this.refs.canvas.getContext('2d');
    this.setState({ context: context });
    requestAnimationFrame(() => {this.update()});
  }

  update() {
    const context = this.state.context;

    // Motion trail
    context.fillStyle = 'orange';
    context.globalAlpha = 0.4;
    context.fillRect(0, 0, this.state.screen.width, this.state.screen.height);
    context.globalAlpha = 1;
    const xPos = this.state.screen.width/2;
    const yPos = this.state.screen.height/2;
    const ufo = new UFO(xPos, yPos);
    ufo.render(this.state)

    // Next frame
    // requestAnimationFrame(() => {this.update()});
  }



  render() {
    return <canvas ref='canvas' width={this.state.screen.width} height={this.state.screen.height} ></canvas>;
  }
};

render(<Canvas />, document.getElementById('app'));
