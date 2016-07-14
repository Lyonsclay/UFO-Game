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


// if (rect1.x < rect2.x + rect2.width &&
//     rect1.x + rect1.width > rect2.x &&
//     rect1.y < rect2.y + rect2.height &&
//     rect1.height + rect1.y > rect2.y) {
//   // collision detected!
// }
