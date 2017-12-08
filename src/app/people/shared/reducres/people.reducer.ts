import { fromJS, Map, Stack } from 'immutable';
import { PEOPLE_ACTIONS } from '../actions/people.actions';
import { createReducer } from '../../../shared/redux/create-reducer';

const INITIAL_STATE: Map<any, any> =  Map({
  people:  Stack.of()
});

export const peopleReducer = createReducer(INITIAL_STATE, {
  [PEOPLE_ACTIONS.LOAD_PEOPLE]: (state: Map<any, any>, action) => {
    return state.merge({
      people: [ ...INITIAL_STATE.get('people'), ...fromJS(action.payload.results) ]
    });
  }
});

