import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './assets/common.styl'
const App = lazy(() => import('./components/App/App'))

ReactDOM.render(
  <Root>
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/" component={App}></Route>
        </Switch>
      </Suspense>
    </Router>
  </Root>,
  document.getElementById('root')
)
