import {createStore} from 'react-redux';

import rootReducers from './Reducer';


const store = createStore(rootReducers);

export default store;