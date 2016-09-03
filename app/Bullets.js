import React from 'react';
import { render } from 'react-dom';
import Bullet from './Bullet';

const initialState = { bullets: [] };

export const reducer = (state = initialState , action) => {
  switch (action.type) {
    case 'FIRE_BULLET':
      return { bullets: [...state.bullets, <Bullet />] };
    case 'NO_FIRE_BULLET':
      return state.counter + 1;
    default: 
      return state;
  }
};

export const storage = (reducer) => {
  let state = initialState;

  const getState = () => state;

  const dispatch = (action) =>{ 
    state = reducer(state, action); 
  };

  return { getState, dispatch };
};
