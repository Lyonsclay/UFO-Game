import {
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_FREEZE,
  INCREMENT_CLOCK
} from './actions';
import { combineReducers } from 'redux';

const initialState = {
  clock: 0,
  shipClock: 0,
  shipX: 600,
  shipVelX: 0,
  circleX: 0,
  circleY: 0,
  ufos: []
};

const gameState = (state = initialState, action) => {
  switch (action.type) {
  case MOVE_LEFT:
    return Object.assign({}, state, {
      shipVelX: -4,
      shipClock: 0
    });
  case MOVE_RIGHT:
    return Object.assign({}, state, {
      shipVelX: 4,
      shipClock: 0
    });
  case MOVE_FREEZE:
    return Object.assign({}, state, {
      shipVelX: 0,
      shipClock: 0
    });
  case INCREMENT_CLOCK:
    return Object.assign({}, state, {
      clock: state.clock + .01,
      shipClock: state.shipClock + state.shipVelX,
      shipX: state.shipX + state.shipVelX,
      circleX: Math.sin(state.clock) * 300,
      circleY: Math.cos(state.clock) * 100
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
