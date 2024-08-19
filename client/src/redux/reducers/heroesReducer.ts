/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable import/prefer-default-export */
import type { Action, State } from './types';

const initState: State = {
  heroes: [],
};

export const heroesReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case 'heroes/load':
      return {
        ...state,
        heroes: action.payload,
      };
    case 'heroes/add':
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
      };
    case 'heroes/remove':
      return {
        ...state,
        heroes: state.heroes.filter((hero) => hero.id !== +action.payload),
      };
    default:
      return state;
  }
};