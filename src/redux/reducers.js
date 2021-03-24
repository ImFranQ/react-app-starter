import { SET_PAGE_TITLE } from './actionsTypes';

const reducers = (state, action) => {

  if (action.type === SET_PAGE_TITLE)
    state = { ...state, pageName: action.payload.title };

  return state;
};

export default reducers;