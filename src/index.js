import './index.css'
import React, { Component } from 'react/umd/react.development';
import ReactDOM from 'react-dom';
import { CommentStore, CommentAction } from './store/CommentStore'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: CommentStore.getComment()
    }

    this._onChange = this._onChange.bind(this)
  }

  _onChange() {
    this.setState({
      comments: CommentStore.getComment()
    })
  }

  componentDidMount() {
    CommentStore.addChangeListener(this._onChange)
    CommentAction.loadComment()
  }

  render() {
    const { comments } = this.state

    return (
      <ul>
        {comments.map(comment => <li key={comment.id}>{comment.content}</li>)}
      </ul>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
