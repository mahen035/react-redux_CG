import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../reducers/CounterReducer'
import myLogger from '../middlewares/myLogger'
import capAtTen from '../middlewares/capAtTen'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import fetchPostsReducer from '../reducers/fetchPostsReducer'
import thunk from 'redux-thunk'

export default configureStore({
  reducer: fetchPostsReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myLogger).concat(thunk),
  devTools: [composeWithDevTools]
})