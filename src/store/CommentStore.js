import { EventEmitter } from 'events'
import { AppDispatcher } from './AppDispatcher'
import * as CommentConstant from './CommentConstant'

let comments = []

const CommentStore = Object.assign({}, EventEmitter.prototype, {
  getComment() {
    return comments
  },

  emitChange() {
    this.emit('change')
  },

  addChangeListener(callback) {
    this.on('change', callback)
  },

  removeChangeListener(callback) {
    this.removeListener('change', callback)
  }
})

AppDispatcher.register((action) => {
  switch (action.type) {
    case CommentConstant.REQUEST_COMMENTS_SUCCESS: {
      comments = action.payload.comments
      CommentStore.emitChange()
      break
    }

    default:
      console.log('default')
  }
})


const CommentAction = {
  loadComment() {
    setTimeout(() => {
      AppDispatcher.dispatch({
        type: CommentConstant.REQUEST_COMMENTS_SUCCESS,
        payload: {
          comments: [
            { id: 1, content: 'Loading' },
            { id: 2, content: 'Debugger' }
          ]
        }
      })
    })
  }
}

export {
  CommentStore,
  CommentAction
}
