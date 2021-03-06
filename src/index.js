import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import reducers from 'reducers'
import Layout from 'containers/layout'
import Phones from 'containers/phones'
import Phone from 'containers/phone'
import Basket from 'containers/basket'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
))

const history = syncHistoryWithStore(hashHistory, store)

history.listen((location) => {  
  if (window.gtag) {
    const gtag = window.gtag;
    console.log('send', 'pageview', location.pathname);
    gtag('config', ['AW-790864943', 'UA-129282058-1'], {'page_path': location.pathname});
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path='/' component={Phones}/>
        <Route path='/categories/:id' component={Phones}/>
      </Route>
      <Route path='/phones/:id' component={Phone}/>
      <Route path='/basket' component={Basket} />
    </Router>
  </Provider>,
  document.getElementById('root')
); 
