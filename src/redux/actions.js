import {
  CREATE_POST,
  FETCH_POSTS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
} from './types';

const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};

const showLoading = () => {
  return {
    type: SHOW_LOADER,
  };
};

const hideLoading = () => {
  return {
    type: HIDE_LOADER,
  };
};

const showAlert = (text) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => dispatch(hideAlert()), 3000);
  };
};

const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  };
};

const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=5'
      );
      const json = await response.json();
      setTimeout(() => {
        dispatch({
          type: FETCH_POSTS,
          payload: json,
        });
        dispatch(hideLoading());
      }, 2000);
    } catch (e) {
      dispatch(showAlert('Ошибка на стороне сервера'));
      dispatch(hideLoading());
    }
  };
};

export { createPost, fetchPosts, showAlert, hideAlert };
