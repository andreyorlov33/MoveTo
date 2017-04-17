import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import LogIn from './components/login'
import { bindActionCreators } from 'redux'
import { authActions } from './actions/userActions'
import { searchActions } from './actions/searchActions'
import { userActions } from './actions/userActions'

// APP is a CONTAINER component ...
//  it is subscribed to Redux Store and in conserned with how things work
// it also will dispatch redux actions 

class App extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOut()
  }
  search(event) {
    let city = 'Los Angeles'
    event.preventDefault();
    this.props.dispatch.startSearch(city)
  }
  render() {
    if (this.props.authorized) {
      return (
        <div>
          <button onClick={this.search}> click to search </button>
          <button onClick={this.logOut}> Log Out </button>
          <h2> {this.props.name} </h2>
          <h1> {this.props.uid} </h1>
          <h1> {this.props.currentSearch} </h1>
          <h1> {this.props.pastSearches} </h1>
        </div>
      )
    } else {
      return (
        <LogIn />
      )
    }

  }
}



// Our connect function takes in an argument: mapStateToProps, which is a function.
// The mapStateToProps function has a very important job:
//  receive application state from the store whenever state has changed
//   and make data from that data available to the component as props.

function mapStateToProps(state, ownProps) {
  // Our function should return a new object, the key/value pairs
  //  of which will become available as props and their values in our component.
  console.log('STORE STATE HAS UPDATED!!!')
  console.log(state)

  return {
    name: state.authReducer.userName,
    uid: state.authReducer.uid,
    authorized: state.authReducer.authorized,
    pastSearches: state.searchReducer.pastSearches,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        authActions,
        searchActions,
        userActions
      }, dispatch)
  };
}
// prop type validation function

//  The connect function is provided by Redux. It subscribes
//  our container component to the store, so that it will be alerted when state changes.
export default connect(mapStateToProps, mapDispatchToProps)(App);  
