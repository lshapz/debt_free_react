import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './ducks'
import SignIn from './components/users/SignIn'
import SignUp from './components/users/SignUp'
import TryCard from './components/cards/TryCard'
import NavBarGuest from './containers/NavBarGuest'
import Table from './containers/Table'
import NewPeriod from './components/periods/NewPeriod'
import EditPeriod from './components/periods/PeriodEdit'
import NewCard from './components/cards/NewCard'
import EditCard from './components/cards/EditCard'
import PeriodBody from './containers/PeriodBody'
import { composeWithDevTools } from 'redux-devtools-extension';
import '../public/css/table.css';
import GuestHome from './containers/GuestHome'
import UserForms from './containers/UserForms'
import UserHome from './containers/UserHome'
import { Router, Route, browserHistory } from 'react-router'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)), autoRehydrate())
persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={GuestHome} >
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/try" component={TryCard} />
      </Route>
      <Route path="/user" component={UserHome}>
        <Route path="/periods/show" component={PeriodBody} />
      </Route>
      <Route path="/user/form" component={UserForms} >
        <Route path="/periods/new" component={NewPeriod} />
        <Route path="/periods/edit" component={EditPeriod} />
        <Route path="/cards/new" component={NewCard} />
        <Route path="/cards/edit" component={EditCard} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
