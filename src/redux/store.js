import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
  pageName: ''
};

export default createStore(reducers, initialState);