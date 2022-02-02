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
            <Route path="/chat-screen/:id">
              <ChatScreen />
            </Route>
            <Route path="/reactions">
              <Reactions />
            </Route>
            <Route path="/threads">
              <Threads />
            </Route>
            <Route path="/saved-items">
              <SavedItems />
            </Route>
            <Route path="/all-dms">
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
