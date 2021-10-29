import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostsAndUsers } from '../actions';
import UserHeader from './userHeader';

class PostList extends Component {
    componentDidMount() {
        // this.props.fetchPosts();
        
        // 解決重複連線的問題 -- 寫法二
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className='v-card v-post' key={post.id}>
                    <div className='v-post-content'>
                        <div className='v-post-user'>
                            <i className='large middle align icon user' />
                            <UserHeader userId={post.userId} />
                            <small>Posted 0 min ago</small>
                        </div>
                        <div className='content'>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return <div className='v-postList'>{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

// export default connect(mapStateToProps, { fetchPosts })(PostList);
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);