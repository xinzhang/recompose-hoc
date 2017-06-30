import React, { Component } from 'react';

const User =  ({name}) => <div className="User">{name}</div>

const overrideProps = (overrideProps) => (BaseComponent) => (props) =>
  <BaseComponent {...props} {...overrideProps}/>

const neverRender = (BaseComponent) =>
  class extends Component {
    shouldComponentUpdate() {
      return false;
    }
    render() {
      return <BaseComponent {...this.props} />
    }
  }

const alwaysBob = overrideProps({name:'Bob'})
const User2 = neverRender(User)

const App1 = () =>
  <div>
    <User name="Tim" />
    <User2 name="John" />
  </div>

export default App1;
