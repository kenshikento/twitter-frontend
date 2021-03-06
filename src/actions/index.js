export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

const MY_API_KEY = 'c39a26d9c12f48dba2a5c00e35684ecc';

export const getChannel = channel => ({
  type: SELECT_CHANNEL,
  channel,
});

export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

export const receivedPosts = json => ({
  type: RECEIVE_POSTS,
  json: json,
});

export function fetchPosts(channel) {
  console.log(channel);
  return function (dispatch) {
    dispatch(requestPosts());
    // change url
    return fetch(`http://localhost:8000/posts`)
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        console.log(json);
        dispatch(receivedPosts(json));
      },
    );
  };
}

/**
 * need function to authenicate and grab token
 *
 */