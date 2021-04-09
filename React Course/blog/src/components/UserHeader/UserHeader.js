import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
    render() {
        return (
            <div className='header'>{(this.props.user) ? this.props.user.name : 'Loading...'}</div>
        )
    }
}

const mapStateToProps = ({ users }, ownProps) => {
    return { user: users.find(user => user.id === ownProps.userId) }; 
}

export default connect(mapStateToProps)(UserHeader);