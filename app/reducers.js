import {
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_FREEZE,
  INCREMENT_CLOCK,
  FIRE_BULLET,
  ADD_UFO,
  END_GAME,
  HIT_UFO
} from './actions';
import { combineReducers } from 'redux';

const initialState = {
  play: true,
  clock: 0,
  shipX: 600,
  shipVelX: 0,
  circleX: 0,
  circleY: 0,
  ufos: [{top: -10, left: 600, xSet: 500, ySet: 300}],
  bullets: [],
  fireWait: true,
  score: 0
};

const advanceBullets = (bullets) => {
  return bullets
    .filter((bullet, i) => bullet.top > 0 && i < 6)
    .map((bullet) => ({left: bullet.left, top: bullet.top - 8}));
};

const ufoSets = [[44, 400], [100, 300], [330, 100], [600, 900], [400, 400], [200, 200], [620, 200], [180, 1200], [150, 250], [180, 1000], [142, 380], [-100, 500], [10, 780], [350, 530], [400, 350]];

const initUFO = (i, x, y) => {
  const xSet = ufoSets[i][0];
  const ySet = ufoSets[i][1];

  return {
    top: xSet + x * ySet * 2,
    left: ySet + y * xSet * 2,
    xSet: xSet,
    ySet: ySet 
  };
};

const makeUFO = (ufo, x, y) => {
  return {
    top: ufo.xSet + x * ufo.ySet * 2,
    left: ufo.ySet + y * ufo.xSet * 2,
    xSet: ufo.xSet,
    ySet: ufo.ySet
  };
};

const advanceUFOs = (ufos, x, y) => {
  return ufos
    .filter((ufo, i) => i < 14)
    .map((ufo, i) => makeUFO(ufo, x, y));
};

const removeUFO = (ufos, index) => {
  return  ufos.filter((ufo, i) => i !== index);
};

const removeBullet = (bullets, index) => {
  return bullets.filter((bullet, i) => i !== index);
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
      bullets: [...state.bullets, {left: state.shipX + 66, top: 680}]
    });
  case FIRE_NOW:
    return Object.assign({}, state, {
      fireWait: false
    });
  case ADD_UFO:
    return Object.assign({}, state, {
      ufos: [...state.ufos,
             initUFO(state.ufos.length, state.circleX, state.circleY)]
    });
  case HIT_UFO:
    console.log(action.payload)
    return Object.assign({}, state, {
      ufos: removeUFO(state.ufos, action.payload.ufoIndex),
      bullets: removeBullet(state.bullets, action.payload.bulletIndex),
      score: state.score + 10
    });
  case INCREMENT_CLOCK:
    return Object.assign({}, state, {
      clock: state.clock + .01,
      shipX: state.shipX + state.shipVelX,
      circleX: Math.sin(state.clock),
      circleY: Math.cos(state.clock),
      bullets: advanceBullets(state.bullets),
      ufos: advanceUFOs(state.ufos, state.circleX, state.circleY)
    });
  case END_GAME:
    return Object.assign({}, state, {
      play: false
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
