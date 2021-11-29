import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import EquipmentRegistration from './components/EquipmentRegistration';

import './App.css';

function App() {

  const [pages] = useState(['Home', 'LogIn', 'SignUp', 'EquipmentRegistration']);
  const [currentPageSelection, setCurrentPageSelection] = useState(pages[0]);

  return (

    <div className="pageContent d-flex flex-row justify-content-between">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
     integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
     crossorigin=""></script>

      <Header
      pages={pages}
      currentPageSelection = {currentPageSelection}
      setCurrentPageSelection = {setCurrentPageSelection} />
      
      <main>

      {currentPageSelection === "Home" && <Home /> }

      {currentPageSelection === "LogIn" && <LogIn /> }

      {currentPageSelection === "SignUp" && <SignUp /> }


      {currentPageSelection === "EquipmentRegistration" && <EquipmentRegistration /> }

      </main>
    </div>
  );
}

export default App;
