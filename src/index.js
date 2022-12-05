import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  // eslint-disable-next-line no-undef
  uri: process.env.REACT_APP_API_URL,
  cache: cache,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
