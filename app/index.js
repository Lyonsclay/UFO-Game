import React from 'react';
import { render } from 'react-dom';
import UFO from './UFO';
import Ship from './Ship';
import Bullet from './Bullet';
import { Provider } from 'react-redux';
import configureStore from './store';
import {
  moveLeft,
  moveRight,
  moveFreeze,
  incrementClock,
  fireBullet,
  addUFO
} from './actions';
import { connect } from 'react-redux';

const store = configureStore();

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      screen: { width: window.innerWidth, height: window.innerHeight }
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
    document.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('keypress', this.handleKeyPress, false);
    requestAnimationFrame(() => {this.update()});
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
    document.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('keypress', this.handleKeyPress, false);
  }

  update = () => {
    this.props.dispatch(incrementClock());
    if (Math.round(this.props.clock * 100) % 193 === 0) {
      console.log(this.props.ufos);
      this.props.dispatch(addUFO());
    }
    requestAnimationFrame(() => {this.update()});
  }

  handleKeyDown = (e) => {
    if (e.key === '[') {
      this.props.dispatch(moveLeft());
    } else if (e.key === ']') {
      this.props.dispatch(moveRight());
    }
  }

  handleKeyUp = (e) => {
    this.props.dispatch(moveFreeze());
  }

  handleKeyPress = (e) => {
    if (e.key === ' ') {
      this.props.dispatch(fireBullet());
    }
  }

  render() {
    const ufoStyle = {
      position: 'absolute',
      top: (100 + this.props.circleX * 300).toString() + 'px',
      left: (500 + this.props.circleY * 100).toString() + 'px'
    };
    const ufoStyle2 = {
      position: 'absolute',
      left: (500 + this.props.circleX * 300).toString() + 'px',
      top: (200 + this.props.circleY * 100).toString() + 'px'
    };
    const ufoStyle3 = {
      position: 'absolute',
      left: (500 + 2 * this.props.circleX * 300).toString() + 'px',
      top: (400 + 2 * this.props.circleY * 100).toString() + 'px'
    };
    const shipStyle = {
      position: 'absolute',
      left: this.props.shipX.toString() + 'px',
      top: '700px'
    };
    const ufos = this.props.ufos.map((ufo, i) =>
      <UFO
        key={i}
        ufoStyle={{
          position: 'absolute',
          left: ufo.left.toString() + 'px',
          top: ufo.top.toString() + 'px'
        }}
      />
    );
    const bullets = this.props.bullets.map((bullet, i) =>
      <Bullet
        key={i}
        bulletStyle={{
          position: 'absolute',
          left: bullet.left.toString() + 'px',
          top: bullet.top.toString() + 'px'
        }}
      />
    );
    const galaxyStyle={ width: this.state.screen.width, height: this.state.screen.height };

    return (
      <div className="Galaxy" style={galaxyStyle}>
        <UFO width={130} height={55} ufoStyle={ufoStyle} />
        <UFO width={130} height={55} ufoStyle={ufoStyle2} />
        <UFO width={130} height={55} ufoStyle={ufoStyle3} />
        {bullets}
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
    bullets: state.bullets,
    ufos: state.ufos
  };
};

const Game = connect(mapStateToProps)(App);

render(
  <Provider store={store}>
    <Game />
  </Provider>, document.getElementById('app')
);
