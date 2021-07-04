import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "../styles";
import Home from "./Home";

const Routes: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
};

export default Routes;
