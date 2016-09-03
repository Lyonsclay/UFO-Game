import configureStore from '../app/store';
import expect from 'expect';
import { reducer, storage } from '../app/Bullets';

describe('bullets', () => {
  let store;

  beforeEach(() => {
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

   store = configureStore(initialState);
  });
  
  it('adds bullets', () => {
    store.dispatch({ type: 'FIRE_BULLET' });

    const stateAfter = store.getState();

    expect(stateAfter.bullets.length).toEqual(1);
  });

  it('keeps the number under 10', () => {
    for (let i = 0; i < 8; i++) {
      store.dispatch({ type: 'FIRE_BULLET' });
      store.dispatch({ type: 'INCREMENT_CLOCK' });
    };

    const stateAfter = store.getState();
   
    expect(stateAfter.bullets.length).toEqual(6);
  });

  it('makes a store', () => {
    store = configureStore();

    const stateAfter = store.getState();

    expect(stateAfter.bullets.length).toEqual(0);
  })
});
