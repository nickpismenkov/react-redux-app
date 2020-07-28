import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { appReducer } from './appReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
});

export { rootReducer };
