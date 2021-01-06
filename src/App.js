import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/homepage/homepage'
import Design from './pages/interior/design'
import About from './pages/interior/about'
import Contact from './pages/interior/contact'





function App() {
  return (
    <Router>
      <main>
        <Switch>
        <Route path='/' exact component={Homepage}>
        </Route>
        <Route path='/portfolio' exact component={Design}>
        </Route>

        <Route path='/about' exact component={About}>
        </Route>

        <Route path='/contact' exact component={Contact}>
        </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
