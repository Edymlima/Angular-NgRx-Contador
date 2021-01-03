import { incremente, decremente } from './../action/contador.action';
import { createReducer, on } from '@ngrx/store';



export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(incremente, (state) => state + 1),
  on(decremente, (state) => state - 1)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}


