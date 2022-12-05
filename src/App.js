import React from 'react';
import {useQuery} from '@apollo/client';
import {getCharacters} from './queries';
import './App.css';

function App() {
  const {loading, data, error} = useQuery(getCharacters);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  console.warn(data, loading, error)

  return (
    <div className="App bg-orange-200">
      {data.characters.results.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
}

export default App;
