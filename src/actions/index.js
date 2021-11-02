import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// 解決重複連線的問題 -- 寫法二
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // console.log('About to fetch posts');
    await dispatch(fetchPosts());
    
    // 寫法二 -- 一種寫法
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    // 寫法二 -- 重構寫法
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()

};

export const fetchPosts = () => async dispatch => {
    const response  = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
};

export const setKeywords = event => {
    return {
        type: 'SET_KEYWORDS',
        payload: event.target.value
    }
};

export const filterPosts = condition => {
    return {
        type: 'FILTER_POSTS',
        payload: condition
    }
}

export const fetchUser = id => async dispatch => {
    const response  = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}

// 用 lodash 的寫法 (解決重複連線的問題) -- 寫法一
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response  = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     })
// })