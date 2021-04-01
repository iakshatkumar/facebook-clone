import React from "react";

// import styles
import "./App.css";

// importing Components
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

const App = () => {
  
  // destructuring the state and pull out user
  const [ state , dispatch] = useStateValue();

  const { user } = state;
  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
