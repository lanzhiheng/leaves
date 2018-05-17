import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class'
import TabPane from './TabPane'
import Tabs from './Tabs'
import './index.css'

const Wrap = createReactClass({
  getInitialState: function() {
    return {
      index: 1
    };
  },

  handleChange(event) {
    this.setState({
      index: parseInt(event.target.value)
    })
  },

  render() {
    return (
      <div>
        <select value={this.state.index} onChange={this.handleChange}>
          <option val="1">1</option>
          <option val="2">2</option>
          <option val="3">3</option>
        </select>
        <Tabs activeIndex={this.state.index}>
          <TabPane order="1" tab={'Tab 1'}>Ruby</TabPane>
          <TabPane order="2" tab={'Tab 2'}>Hello World</TabPane>
          <TabPane order="3" tab={'Tab 3'}>Good Nice</TabPane>
        </Tabs>
      </div>
    )
  }
})

const WrapFactory = React.createFactory(Wrap)

ReactDOM.render(
  WrapFactory(),
  document.getElementById('root')
);
