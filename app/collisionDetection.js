import { connect } from 'react-redux';
import configureStore from './store';
import { endGame } from './actions';

const collisionDetection = (ufos, shipX, dispatch) => {

  ufos.forEach((ufo, i) => {
    if (ufo.top > 600 && Math.abs(ufo.left - shipX) < 140) {
      dispatch(endGame());
    }
  });
}; 

export default collisionDetection;

const collided = () => {
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
}
