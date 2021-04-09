import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        return (
            <div className='header'>{(this.props.user) ? this.props.user.name : 'Loading...'}</div>
        )
    }
}

const mapStateToProps = ({ users }, ownProps) => {
    return { user: users.find(user => user.id === ownProps.userId) }; 
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);