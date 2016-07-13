import React from 'react';
import { render } from 'react-dom';
import UFO from './UFO';
import Ship from './Ship';
import { Provider } from 'react-redux';
import configureStore from './store';
import {
  moveLeft,
  moveRight,
  moveFreeze,
  incrementClock
} from './actions';
import { connect } from 'react-redux';

const store = configureStore();

class App extends React.Component {
  constructor() {
    super()
   
    this.state = {
      screen: { width: window.innerWidth, height: window.innerHeight }
    };
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress, false);
    requestAnimationFrame(() => {this.update()});
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress, false);
  }


  update = () => {
    this.props.dispatch(incrementClock());
    if (Math.abs(this.props.shipClock) > 80) {
      this.props.dispatch(moveFreeze());
    }
    requestAnimationFrame(() => {this.update()});
  }

  handleKeyPress = (e) => {
    if (e.key === '[') {
      this.props.dispatch(moveLeft());
    } else if (e.key === ']') {
      this.props.dispatch(moveRight());
    }
  }

  render() {
    const ufoStyle = {
      position: 'absolute',
      top: (100 + this.props.circleX).toString() + 'px',
      left: (500 + this.props.circleY).toString() + 'px'
    };
    const ufoStyle2 = {
      position: 'absolute',
      left: (500 + this.props.circleX).toString() + 'px',
      top: (200 + this.props.circleY).toString() + 'px'
    };
    const ufoStyle3 = {
      position: 'absolute',
      left: (500 + 2 * this.props.circleX).toString() + 'px',
      top: (400 + 2 * this.props.circleY).toString() + 'px'
    };
    const shipStyle = {
      position: 'absolute',
      left: this.props.shipX.toString() + 'px',
      top: '700px'
    };
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

const mapStateToProps = (state) => {
  return {
    shipX: state.shipX,
    circleX: state.circleX,
    circleY: state.circleY,
    clock: state.clock,
    shipClock: state.shipClock
  };
};

const Game = connect(mapStateToProps)(App);

render(
  <Provider store={store}>
    <Game />
  </Provider>, document.getElementById('app')
);
