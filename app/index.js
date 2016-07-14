import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import UFO from './UFO';
import Ship from './Ship';
import Bullet from './Bullet';
import configureStore from './store';
import {
  moveLeft,
  moveRight,
  moveFreeze,
  incrementClock,
  fireBullet,
  addUFO,
  hitUFO,
  endGame
} from './actions';
import collisionDetection from './collisionDetection';

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
      this.props.dispatch(addUFO());
    }

    this.props.ufos.forEach((ufo) => {
      if (ufo.top > 670 && ufo.top < 750  && Math.abs(ufo.left - this.props.shipX) < 140) {
        this.props.dispatch(endGame());
      }
    });

    this.props.bullets.forEach((bullet, bulletIndex) => {
      this.props.ufos.forEach((ufo, ufoIndex) => {
        if (bullet.left > ufo.left && bullet.left < ufo.left + 130 && bullet.top > ufo.top && bullet.top < ufo.top + 55) {
          this.props.dispatch(hitUFO(bulletIndex, ufoIndex)); 
        } 
      });
    });

    if (this.props.play) {
      requestAnimationFrame(() => {this.update()});
    }
  };

  handleKeyDown = (e) => {
    if (e.key === '[') {
      this.props.dispatch(moveLeft());
    } else if (e.key === ']') {
      this.props.dispatch(moveRight());
    }
  };

  handleKeyUp = (e) => {
    this.props.dispatch(moveFreeze());
  };

  handleKeyPress = (e) => {
    if (e.key === ' ') {
      this.props.dispatch(fireBullet());
    }
  };

  render() {
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
    const galaxyStyle={
      position: 'fixed',
      width: this.state.screen.width,
      height: this.state.screen.height
    };
    const endGameStyle={
      position: 'absolute',
      left: 300,
      top: 200,
      fontFamily: 'Impact',
      fontSize: '100px',
      color: 'DarkGray'
    };
    const scoreStyle={
      position: 'absolute',
      left: this.state.screen.width - 250,
      top: 50,
      fontFamily: 'Impact',
      fontSize: '40px',
      color: 'LightGray',
      paddingLeft: '20px',
      paddingRight: '20px',
      border: '5px solid LightGray',
      borderRadius: '8px'
    };
    const gameOver = () => { 
      let message;

      if (this.props.play) {
        message = '';
      } else {
        message = <h1 style={endGameStyle}>You Have Been Destroyed!</h1>;
      }

      return message;
    };

    return (
      <div className="Galaxy" style={galaxyStyle}>
        <h2 style={scoreStyle}>score: {this.props.score}</h2>
        {gameOver()}
        {ufos}
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
    ufos: state.ufos,
    play: state.play,
    score: state.score
  };
};

const Game = connect(mapStateToProps)(App);

render(
  <Provider store={store}>
    <Game />
  </Provider>, document.getElementById('app')
);
