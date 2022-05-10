import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../reducers/CounterReducer'
import myLogger from '../middlewares/myLogger'
import capAtTen from '../middlewares/capAtTen'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

export default configureStore({
  reducer: CounterReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myLogger).concat(capAtTen).concat(logger),
  devTools: [composeWithDevTools]
})