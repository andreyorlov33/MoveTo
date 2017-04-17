import React, { Component } from 'react'
//  import connect to be able to subscribe component to the store
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { authActions } from '../actions/authActions'
// import { searchActions } from '../actions/searchActions'
// import { userActions } from '../actions/userActions'
import * as actions from  '../actions/authActions'
import TextInput from './common/TextInput'

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credential: {
                userName: '',
                email: '',
                password: '',
            }

        }
        this.onChange = this.onChange.bind(this)
        this.onLogIn = this.onLogIn.bind(this)
        this.onRegister = this.onRegister.bind(this)
        this.onGuest = this.onGuest.bind(this)
    }
    // need to targer specific text inputs 
    onChange(event) {
        const field = event.target.name
        const credential = this.state.credential
        credential[field] = event.target.value
        return this.setState({ credential: credential });
    }

    onLogIn(event) {
        event.preventDefault();
        this.props.actions.logIn(this.state.credential);

    }

    onRegister(event) {
        event.preventDefault();
        this.props.actions.register(this.state.credential);

    }

    onGuest(event) {
        event.preventDefault();
        this.props.actions.guest();
    }

    render() {
        return (
            <div className='logIn'>
                <form>
                    <TextInput
                        name="userName"
                        label="Name"
                        type="text"
                        value={this.state.credential.userName}
                        onChange={this.onChange}
                    />
                    <TextInput
                        name="email"
                        label="Email"
                        type="email"
                        value={this.state.credential.email}
                        onChange={this.onChange}
                    />
                    <TextInput
                        name="password"
                        label="Password"
                        type="password"
                        value={this.state.credential.password}
                        onChange={this.onChange}
                    />
                    <button type='' onClick={this.onLogIn} >Sign In</button>
                    <button type='' onClick={this.onRegister} >Register </button>
                    <button type='' onClick={this.onGuest} >Guest Sign In</button>
                </form>
            </div>
        )
    }
}

// mapDispatchToProps binds functions from ACTIONS file as properties for the given component
// now components can dispatch actions ...

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
           actions, dispatch)
    };
}
// connect function to the store 
// first argument is null because we are not doing mapStateToProps
export default connect(null, mapDispatchToProps)(LogIn);


