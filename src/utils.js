import { applyMiddleware, createStore } from 'redux'
import { characters } from './Store/reducers/characters'
import thunk from 'redux-thunk'

let middlewares = [thunk]

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(characters, initialState)
}
