import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import rootReducer from '../ducks/index.js'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)), autoRehydrate())
persistStore(store)

