import './index.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware/dist/es/index'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

// Add thunk
import thunk from 'redux-thunk'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {counter: state.counter + 1})
    case 'DECREMENT':
      return Object.assign({}, state, {counter: state.counter - 1})
    case 'DONE':
      console.log(action.loginformation);
      return state
    default:
      return state
  }
}


const promiseMiddleware = promise({
  promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILD']
})
let store = applyMiddleware(thunk, promiseMiddleware, logger)(createStore)(reducer, {counter: 3, number: 4})

class App extends Component {
  componentDidMount() {
    const { requestResource } = this.props
    requestResource()
  }

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

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'Hello World');
  });
}

const first = () => {
  return (dispatch) => {
    dispatch({
      type: 'INCREMENT',
      payload: timeout(5000)
    })
  }
}

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({
    type: 'INCREMENT'
  }),
  decrement: () => dispatch({
    type: 'DECREMENT'
  }),
  requestResource: () => dispatch(first())
})

const NewApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <NewApp />
  </Provider>,
  document.getElementById('root')
);
