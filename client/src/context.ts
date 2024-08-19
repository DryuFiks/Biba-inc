/* eslint-disable import/prefer-default-export */
import { type Dispatch, createContext } from 'react';
import type { Action, State } from './redux/reducers/types';
import  { initState } from './reducer/reducer';

export type StateContext = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const stateContext: StateContext = {
  state: initState,
  dispatch: () => {},
};

export const appContext = createContext(stateContext);