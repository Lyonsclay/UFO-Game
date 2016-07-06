import React from 'react';
import { render } from 'react-dom';

class Treasure extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const treasureStyle = { color: 'black' };
    return <text style={this.props.pirateStyle}>Welcome to the&nbsp;
      !</text>;
  }
}

class Ship extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const shipStyle={fontFamily: "Helvetica", fontSize: "40px" };
    const plankStyle={stroke: "red"}

    return <text className="ship" style={shipStyle} x={this.props.shipX} y={this.props.shipY}>Welcome to the <tspan style={this.props.pirateStyle}>Party</tspan>!</text>;
  }
}

class Pirate extends React.Component {
  constuctor(props){
    super(props);
  }

  render() {
    const pirateStyle = { fontFamily: "helvetica", fill: "orange", textDecoration: "line-through" };
    const pirateColor = "orange";

    return (<div>
            <svg width="420px" height="200px">
            <text style={pirateStyle} x="100px" y="50px">Pirate Party</text>
            <Ship shipX="10px" shipY="50px" pirateStyle={pirateStyle}/>
            <Treasure pirateColor={pirateColor} />
            </svg>
            </div>
           );
  }
}

render(<Pirate />, document.getElementById('app'));
