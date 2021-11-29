import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp'

import './App.css';

function App() {
  const [pages] = useState(['Home', 'Log In', 'Sign Up']);
  const [currentPageSelection, setCurrentPageSelection] = useState(pages[0]);

  return (
    <div className="pageContent d-flex flex-row space-between">
      <Header
      pages={pages}
      currentPageSelection = {currentPageSelection}
      setCurrentPageSelection = {setCurrentPageSelection} />
      
      <main>
        {currentPageSelection === "Home" && 
          <Home />
        }

        {currentPageSelection === "Log In" && 
          <LogIn />
        }

        {currentPageSelection === "Sign Up" && 
          <SignUp />
        }

      </main>

    </div>
  );
}

export default App;
