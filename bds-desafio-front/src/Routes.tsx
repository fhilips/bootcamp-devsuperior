import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Catalogo from "pages/Catalogo";

const Routes = () => (
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/">
          <Home />          
      </Route>
      <Route path="/catalogo">
          <Catalogo />          
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Routes;