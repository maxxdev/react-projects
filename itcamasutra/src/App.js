import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container-fluid">
        <Sidebar/>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <Route path={'/profile'} exact component={Profile}/>
          <Route path={'/dialogs'} component={Dialogs}/>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;
