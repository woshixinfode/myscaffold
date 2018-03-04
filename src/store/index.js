import {createStore,applyMiddleware} from 'redux'
import reduxLogger from 'redux-logger'
import reducxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise';
import reducer from './reducers/index'


let store = createStore(reducer,applyMiddleware(reduxLogger,reducxThunk,reduxPromise))
window._store = store
export default store