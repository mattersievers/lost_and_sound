import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import EquipmentRegistration from './components/EquipmentRegistration';
import MyEquipment from './components/MyEquipment';

import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from '../src/utils/auth';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return{
    headers:{
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [pages] = useState(['Home', 'LogIn', 'SignUp']);  
  const [loggedInPages] = useState(['Home','Equipment Registration', 'My Equipment']); 
  
  const [currentPageSelection, setCurrentPageSelection] = useState(pages[0]);

  return (
    <ApolloProvider client={client}>
      <div className="pageContent d-flex flex-row justify-content-between">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
      integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
      crossorigin=""/>
      <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
      integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
      crossorigin=""></script>
      
      
        <Header
        pages={Auth.loggedIn() ? loggedInPages:pages}
        currentPageSelection = {currentPageSelection}
        setCurrentPageSelection = {setCurrentPageSelection} />
        
        <main>

        {currentPageSelection === "Home" && <Home /> }

        {currentPageSelection === "LogIn" && <LogIn /> }

        {currentPageSelection === "SignUp" && <SignUp /> }

        {currentPageSelection === "Equipment Registration" && <EquipmentRegistration /> }

        {currentPageSelection === "My Equipment" && <MyEquipment />}

        </main>
      </div>
    </ApolloProvider>
    );
}

export default App;
