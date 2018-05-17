import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class'
import styles from './index.css'

console.log(styles);

const Wrap = createReactClass({
  getInitialState: function() {
    this.textInput = React.createRef()
    return {
      area: [],
      value: '',
    };
  },

  handleSelectChange(event) {
    const { options } = event.target
    const area = Object.keys(options).filter(i => options[i].selected === true).map(i => options[i].value)

    this.setState({
      area
    })
  },

  handleSubmit(e) {
    e.preventDefault()
    const current = this.textInput.current
    console.log(current.value)
  },

  render() {
    const { area } = this.state

    const style = {
      color: 'red',
      height: 100,
      width: 400,
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref={this.textInput} type="text" defaultValue="hangzhou" />
          <button type="submit">Submit</button>
        </form>

        <input value={this.state.value} onChange={ e => { this.setState({ value: e.target.value.toUpperCase() }) } } />
        <select style={style} value={area} multiple={true} onChange={this.handleSelectChange}>
          <option value="bejing">北京</option>
          <option value="shanghai">上海</option>
          <option value="hangzhou">杭州</option>
        </select>
      </div>
    )
  }
})

const WrapFactory = React.createFactory(Wrap)

ReactDOM.render(
  WrapFactory(),
  document.getElementById('root')
);
