import { fromJS, Map, Stack } from 'immutable';
import { STAR_SHIPS_ACTIONS } from '../actions/star-ships.actions';
import { createReducer } from '../../../shared/redux/create-reducer';

const INITIAL_STATE: Map<any, any> =  Map({
  ships:  Stack.of()
});

export const shipsReducer = createReducer(INITIAL_STATE, {
  [STAR_SHIPS_ACTIONS.LOAD_SHIPS]: (state: Map<any, any>, action) => {
    return state.merge({
      ships: [ ...INITIAL_STATE.get('ships'), ...fromJS(action.payload.results) ]
    });
  }
});

