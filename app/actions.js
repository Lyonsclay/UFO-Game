export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const MOVE_FREEZE = 'MOVE_FREEZE';
export const INCREMENT_CLOCK = 'INCREMENT_CLOCK'; export function moveRight() {
  return {
    type: 'MOVE_RIGHT'
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

export function incrementClock() {
  return {
    type: 'INCREMENT_CLOCK'
  };
}
