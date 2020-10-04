import { INCREMENTAR, DECREMENTAR } from './contador.actions';
import { Action } from '@ngrx/store';

export function contadorReducer(state: number = 10, action: Action) {
  switch (action.type) {
    default:
      return state;
    case INCREMENTAR:
      return (state += 1);
    case DECREMENTAR:
      return (state -= 1);
  }
}
