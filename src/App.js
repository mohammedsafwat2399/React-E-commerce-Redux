import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//component
import Home from "./pages/home/Home";
 import Login from "./pages/login/Login";
 import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn);
  return (
    <>
      {isLoggIn && (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            </Switch>
          <Footer />
        </Router>
      )}
      {!isLoggIn && <Login />}
    </>
  );
};
export default App;
