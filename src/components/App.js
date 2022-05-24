
import NavBar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import PostDetails from "./PostDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";

export default function App() {
  return (
    <BrowserRouter>
    {console.log("Wleh")}
      <div className="App" style={{ padding: "10px" }}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={(props) => <Home {...props} />} />
          <Route path="/about" component={(props) => <About {...props} />} />
          {/* <Route path="/contact">
            <Contact auth="True" />
          </Route> */}
          <Route
            path="/contact"
            component={(props) => <Contact {...props} isAuth="true" />}
          />
          <Route path="/posts/:post_id" component={(props) => <PostDetails {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
