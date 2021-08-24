import Navbar from "components/Navbar";
import GitSearch from "pages/GitSearch";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";


const Routes = () => {
  return (
    <BrowserRouter>
        <Navbar />        
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gitsearch">
          <GitSearch />
        </Route>
      </Switch>
    </BrowserRouter>
 
  )
}

export default Routes;