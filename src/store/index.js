import { createStore, combineReducers } from 'redux'

import { reducers } from './reducer'

export const store = createStore(reducers)

