import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
    // 解決重複連線的問題 -- 寫法二 是以 PostList的 props 傳進來
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId);
    // }

    render() {
        // 寫法一：在 render 裡處理
        // const user = this.props.users.find(user => user.id === this.props.userId);
        
        // 寫法二：mapStateToProps 裡處理完再放進來
        const user = this.props.user;

        if (!user) {
            return null;
        }

        return <div className='header'><a href=''>{ user.name }</a></div>
    }
}
const mapStateToProps = (state, ownProps) => {
    // return { users: state.users }
    return { user: state.users.find(user => user.id === ownProps.userId) };
}

// export default connect(mapStateToProps, { fetchUser })(UserHeader);
export default connect(mapStateToProps)(UserHeader);