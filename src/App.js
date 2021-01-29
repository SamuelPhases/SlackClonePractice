import React,{useState} from "react";
import "./App.css";
import ChatScreen from "./components/ChatScreenComponent/ChatScreen";
import Header from "./components/HeaderComponent/Header";
import Sidebar from "./components/SidebarComponent/Sidebar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Reactions from "./pages/Reactions";
import Threads from "./pages/Threads";
import SavedItems from "./pages/SavedItems";
import AllDms from "./pages/AllDms";
import Login from "./components/LoginComponent/Login";
import AddChannel from "./components/AddForm/AddChannel";

function App() {

  return (
    // <Login/>
    <>
      
    <Router>
      <div className="app">
        <Header />
        <div className="app--body">
          <Sidebar/>
            <Switch>
            <Route path="/chatscreen">
              <ChatScreen />
            </Route>
          </Switch>
          <Switch>
            <Route path="/reactions">
              <Reactions />
            </Route>
          </Switch>
          <Switch>
            <Route path="/threads">
              <Threads />
            </Route>
          </Switch>
          <Switch>
            <Route path="/saveditems">
              <SavedItems />
            </Route>
          </Switch>
          <Switch>
            <Route path="/alldms">
              <AllDms />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </>
  );
}

export default App;
