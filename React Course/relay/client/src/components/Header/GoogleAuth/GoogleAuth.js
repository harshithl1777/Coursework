import React, { Component } from 'react';

class GoogleAuth extends Component {
    constructor() {
        super();
        this.state = { isSignedIn: null };
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ 
                clientId: '784927523211-vh4q87kurn2dt8a3m4ld5a2bk68vt0c9.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(() => {
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                });
            });
        });
    }

    signInOut = () => {
        if (this.state.isSignedIn) {
            this.auth.signOut();
        } else {
            this.auth.signIn();
        }
    }

    render() {
        return (
            <button className='ui red google button' onClick={this.signInOut}>
                <i className='google icon' />
                {(this.state.isSignedIn) ? 'Logout' : 'Log In'}
            </button>
        );
    }
}

export default GoogleAuth;