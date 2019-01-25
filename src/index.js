import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import myReducer from '../src/containers/reducer'
 import { CatchAction } from '../src/containers/saga';



const sagaMiddleware= createSagaMiddleware();

const store= createStore(myReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(CatchAction);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
