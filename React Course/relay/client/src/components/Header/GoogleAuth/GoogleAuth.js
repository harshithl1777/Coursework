import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../../redux/actions';

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ 
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen((isSignedIn) => this.onAuthChange(isSignedIn));
            })
            .catch(err => alert(`Unable to sign you in: ${err}`));
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
        else this.props.signOut();
    }

    signIn = () => {
        this.auth.signIn();
    };

    signOut = () =>  {
        this.auth.signOut();
    };

    render() {
        if (this.props.isSignedIn) {
            return (
                <button className='ui red google button' onClick={this.signOut}>
                    <i className='google icon' />
                    Sign Out
                </button>
            );
        } else if (this.props.isSignedIn === false) {
            return (
                <button className='ui red google button' onClick={this.signIn}>
                    <i className='google icon' />
                    Sign In with Google
                </button>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);