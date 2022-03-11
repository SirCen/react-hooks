import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/about";
import { UserContext } from "./UserContext";

function AppRouter() {

  const [value, setValue] = useState('hello from context');

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={{value, setValue}}>
          <Routes>
            <Route path="/" exact element={<Index />} />
            <Route path="/about/" element={<About />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default AppRouter;
