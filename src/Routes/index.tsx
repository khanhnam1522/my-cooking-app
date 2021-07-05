import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "../styles";
import Home from "./Home";
import SignIn from "./SignIn";

const Routes: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signIn" exact component={SignIn} />
      </Switch>
    </Router>
  );
};

export default Routes;
