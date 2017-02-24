import { createStore, compse } from 'redux';
import { synchHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer
import rootReducer from './reducers/index';

// My Madeup Data - add soon
import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  post,
  comments
};

const store = createStore(rootReducer, defaultState);

// Provide History - store
const history = synchHistoryWithStore(browserHistory, store);

export default store;
