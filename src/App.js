import React, {Component} from 'react';
import {compose, withState, withHandlers } from 'recompose';

const StatusList = () =>
  <div className="StatusList">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>

const Status = withState('listShown', 'setListVisible', false)(
  ({status, listShown, setListVisible}) =>
  <span onClick={ () => setListVisible( (x) => !x) }>
    {status}
    {listShown && <StatusList />}
  </span>
)

const Tooltip = withState('tooltipShown', 'setTooltipVisible', false)(

({text, children, tooltipShown, setTooltipVisible}) =>
  <span onClick={ ()=>setTooltipVisible( (x) => !x )}>
    {tooltipShown && <div className="Tooltip"> {text}</div>}
    <span>{children}</span>
  </span>
)

const User = ({name, status}) =>
  <div className="User">
    <Tooltip text="Cool Due">{name}</Tooltip> - <Status status={status} />
  </div>

const App = () =>
  <User name="John" status="active" />

export default App;
