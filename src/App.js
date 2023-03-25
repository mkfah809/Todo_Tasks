import "./App.css";
import TodoApp from "./Components/TodoApp.js/todoApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/dashboard";
import PageNotFound from "./Components/PageNotFound/pageNotFound";
function App() {

  
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/welcome">
          <TodoApp />
        </Route>
        <Route  path="/">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
