import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class'
import TabPane from './TabPane'
import TabContent from './TabContent'
import TabNav from './TabNav'

const Wrap = createReactClass({
  render() {
    return (
      <div>
        <TabNav classPrefix="tab" activeIndex={2} panels={[
          <TabPane order="1" tab={'Tab 1'}>Ruby</TabPane>,
          <TabPane order="2" tab={'Tab 2'}>Hello World</TabPane>,
          <TabPane order="3" tab={'Tab 3'}>Good Nice</TabPane>
        ]} />

        <TabContent classPrefix="tab" activeIndex={2} panels={[
          <TabPane order="1" tab={'Tab 1'}>Ruby</TabPane>,
          <TabPane order="2" tab={'Tab 2'}>Hello World</TabPane>,
          <TabPane order="3" tab={'Tab 3'}>Good Nice</TabPane>
        ]} />
      </div>
    )
  }
})

const WrapFactory = React.createFactory(Wrap)

ReactDOM.render(
  WrapFactory(),
  document.getElementById('root')
);
