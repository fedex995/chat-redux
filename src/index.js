import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import wsMiddleware from './actions/websocket'

const store = createStore(
    reducer,
    applyMiddleware(wsMiddleware)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
