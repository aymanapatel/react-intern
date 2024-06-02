import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Components } from "./components/Components";
import { ProductRTKQuery } from "./components/ProductRTKQuery";
import { ProductReactQuery } from "./components/ProductReactQuery";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Components</Link>
            </li>
            <li>
              <Link to="/product-rq">Product - React Query</Link>
            </li>
            <li>
              <Link to="/product-rtkquery">Product - RTK Query</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/product-rq">
            <ProductReactQuery />
          </Route>
          <Route path="/product-rtkquery">
            <ProductRTKQuery />
          </Route>
          <Route path="/">
            <Components />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
