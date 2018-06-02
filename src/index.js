import './index.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {counter: state.counter + 1})
    case 'DECREMENT':
      return Object.assign({}, state, {counter: state.counter - 1})
    default:
      return state
  }
}

let logMiddle = (store) => (dispatch) => (action) => {
  console.log('dispatch', action.type);
  dispatch(action)
  console.log(store.getState());
  console.log('finish', action.type);
}

let store = applyMiddleware(logMiddle)(createStore)(reducer, {counter: 3, number: 4})

class App extends Component {
  render() {
    const { increment, decrement, counter } = this.props

    return (
      <div className="counter">
        <button onClick={decrement}>-</button>
        <input value={counter} readOnly />
        <button onClick={increment}>+</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({
    type: 'INCREMENT'
  }),
  decrement: () => dispatch({
    type: 'DECREMENT'
  })
})

const NewApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <NewApp />
  </Provider>,
  document.getElementById('root')
);
