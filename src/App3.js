import React, {Component} from 'react';
import {compose, setDisplayName, setPropTypes } from 'recompose';
const {connect} = Redux();

const enhance = compose(
  setDisplayName('User'),
  setPropTypes({
    name: React.PropTypes.string.isRequired,
    status: React.PropTypes.string
  }),
  connect()
)

const User = enhance (( {name, status, dispatch}) =>
  <div className="User" onClick={
    () => dispatch({type: 'User_Selected'})
  }>
  {name}: {status}
  </div>
);

console.log(User.displayName);

const App3 = () =>
  <User name="John" status="active" />

// fake implementation of redux
function Redux() {
  return {
    connect: () => (BaseComponent) => (props) =>
      <BaseComponent
        {...props}
        dispatch={ ({ type }) => console.log(type + ' dispatched') }
      />
  }
}

export default App3;
