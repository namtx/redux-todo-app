import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import reducer from './reducers'
import {Provider} from 'react-redux'
import {TodoList} from './containers'

const store = createStore(reducer)
render(
  <Provider store={store}>
    <TodoList/>
  </Provider>, document.getElementById('root')
)
