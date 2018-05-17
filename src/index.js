import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class'
import TabPane from './TabPane'
import Tabs from './Tabs'
import './index.css'

const Wrap = createReactClass({
  render() {
    return (
      <Tabs defaultActiveIndex={1}>
        <TabPane order="1" tab={'Tab 1'}>Ruby</TabPane>
        <TabPane order="2" tab={'Tab 2'}>Hello World</TabPane>
        <TabPane order="3" tab={'Tab 3'}>Good Nice</TabPane>
      </Tabs>
    )
  }
})

const WrapFactory = React.createFactory(Wrap)

ReactDOM.render(
  WrapFactory(),
  document.getElementById('root')
);
