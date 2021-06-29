import "../src/styles/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import MoviePage from "./pages/MoviePage";
import SearchPage from "./pages/SearchResults";
import * as ROUTES from "./constants/routes";

import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// need to add lazy for the suspense to work

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Header />
          <Switch>
            <Route exact path={ROUTES.MAIN} component={Main} />
            <Route exact path={ROUTES.LOGIN} component={Login} />
            <Route exact path={ROUTES.REGISTER} component={Register} />
            <Route exact path={ROUTES.MOVIE} component={MoviePage} />
            <Route exact path={ROUTES.SEARCH_RESULTS} component={SearchPage} />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
      {/* {Add the footer component} */}
    </div>
  );
}

export default App;
