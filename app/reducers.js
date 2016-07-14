import {
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_FREEZE,
  INCREMENT_CLOCK,
  FIRE_BULLET,
  ADD_UFO
} from './actions';
import { combineReducers } from 'redux';

const initialState = {
  clock: 0,
  shipClock: 0,
  shipX: 600,
  shipVelX: 0,
  circleX: 0,
  circleY: 0,
  ufos: [{top: -10, left: 600}],
  bullets: []
};

const advanceBullets = (bullets) => {
  return bullets
    .filter((bullet) => bullet.top > 0)
    .map((bullet) => ({left: bullet.left, top: bullet.top - 8}));
};

const ufoSets = [[44, 400], [100, 300], [330, 100], [600, 900], [400, 400], [200, 200], [620, 200], [180, 1200], [50, 50], [180, 1000], [142, 380], [-100, 500], [10, 780], [350, 530]];

const ufoPosition = (i, x, y) => {
  return {
    top: ufoSets[i][0] + x * ufoSets[i][1],
    left: ufoSets[i][1]} + y * ufoSets[i][0];
};

const advanceUFOs = (ufos, x, y) => {
  return ufos
    .filter((ufo, i) => i > 15)
    .map((ufo, i) => this.ufoPostion(i, x, y));
};

const gameState = (state = initialState, action) => {
  switch (action.type) {
  case MOVE_LEFT:
    return Object.assign({}, state, {
      shipVelX: -4
    });
  case MOVE_RIGHT:
    return Object.assign({}, state, {
      shipVelX: 4
    });
  case MOVE_FREEZE:
    return Object.assign({}, state, {
      shipVelX: 0
    });
  case FIRE_BULLET:
    return Object.assign({}, state, {
      bullets: [...state.bullets, {left: state.shipX +66, top: 680}]
    });
  case ADD_UFO:
    return Object.assign({}, state, {
      ufos: [...state.ufos,
             ufoPosition(state.ufos.length, state.circleX, state.circleY)]
    });
  case INCREMENT_CLOCK:
    console.log(state.ufos);
    return Object.assign({}, state, {
      clock: state.clock + .01,
      shipX: state.shipX + state.shipVelX,
      circleX: Math.sin(state.clock),
      circleY: Math.cos(state.clock),
      bullets: advanceBullets(state.bullets),
      ufos: advanceUFOs(state.ufos, state.circleX, state.circleY)
    });
  default:
    return state;
  }
};

// const clockState = (state = initialState, action) => {
//   switch (action.type) {
//   case INCREMENT_CLOCK:
//     return Object.assign({}, state, {
//       clock: state.clock + .01,
//       circleX: Math.sin(state.clock) * 300,
//       circleY: Math.cos(state.clock) * 100
//     });
//   default:
//     return state;
//   }
// };

// const rootReducer = combineReducers({
//   shipState, clockState
// });

export default gameState;
