import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {ApolloProvider} from 'react-apollo';
import './App.css';
import {client} from "./graphql/client";
import Routes from "./Routes";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
