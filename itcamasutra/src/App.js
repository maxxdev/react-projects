import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <Sidebar/>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <Profile/>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App;
