import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './navbar'

import MainPage from './links/MainPage';
import Team from './links/Team';
import FAQ from './links/FAQ';
import Docs from './links/Docs';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className='routes'>
        <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/Team" exact component={Team}/>
          <Route path="/FAQ" exact component={FAQ}/>
          <Route path="/Docs" exact component={Docs}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
