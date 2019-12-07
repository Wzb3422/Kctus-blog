import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'reset.css/reset.css';
import './index.scss';

const Home = lazy(() => import('./pages/home'));

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path='/'>
            <Home />
          </Route>
        </Suspense>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
