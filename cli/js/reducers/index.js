import { combineReducers } from 'redux';

import exampleReducer from './exampleReducer';
import moreReducer from './moreReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	example: exampleReducer,
	more: moreReducer,
	routing: routerReducer
});
