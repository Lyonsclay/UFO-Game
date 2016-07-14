export const MOVE_LEFT       = 'MOVE_LEFT';
export const MOVE_RIGHT      = 'MOVE_RIGHT';
export const MOVE_FREEZE     = 'MOVE_FREEZE';
export const FIRE_BULLET     = 'FIRE_BULLET';
export const ADD_UFO         = 'ADD_UFO';
export const HIT_UFO         = 'HIT_UFO';
export const INCREMENT_CLOCK = 'INCREMENT_CLOCK';
export const END_GAME = 'END_GAME';

export function moveRight() {
  return {type: 'MOVE_RIGHT'
  };
}

export function moveLeft() {
  return {
    type: 'MOVE_LEFT'
  };
}

export function moveFreeze() {
  return {
    type: 'MOVE_FREEZE'
  };
}

export function fireBullet() {
  return {
    type: 'FIRE_BULLET'
  };
}

export function addUFO() {
  return {
    type: 'ADD_UFO'
  };
}

export function hitUFO(bulletIndex, ufoIndex) {
  return {
    type: 'HIT_UFO',
    payload: { bulletIndex, ufoIndex }
  };
}

export function incrementClock() {
  return {
    type: 'INCREMENT_CLOCK'
  };
}

export function endGame() {
  return {
    type: 'END_GAME'
  };
}
