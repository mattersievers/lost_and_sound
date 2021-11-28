import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp'

import './App.css';

function App() {
  const [pages] = useState(['Home', 'LogIn', 'SignUp']);
  const [currentPageSelection, setCurrentPageSelection] = useState(pages[0]);

  return (

    <div className="pageContent d-flex flex-row justify-content-between">
      <Header
      pages={pages}
      currentPageSelection = {currentPageSelection}
      setCurrentPageSelection = {setCurrentPageSelection} />
      
      <main>
      {currentPageSelection === "Home" && 
        <Home />
      }

      {currentPageSelection === "LogIn" && 
        <LogIn />
      }

      {currentPageSelection === "SignUp" && 
        <SignUp />
      }

      </main>

    </div>
  );
}

export default App;
