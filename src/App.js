import React, { useState } from 'react';
import Pagination from 'rc-pagination';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from './queries';
import 'rc-pagination/assets/index.css';
import './App.css';

function App() {
  const [current, setCurrent] = useState(1);
  const {loading, data, error} = useQuery(GET_CHARACTERS, {
    variables: {
      page: current
    }
  });

  const onChange = page => setCurrent(page);

  if (loading) return <div className="text-2xl min-h-[100vh] flex items-center justify-center">Loading...</div>;

  if (error) return <div className="text-2xl min-h-[90vh] flex items-center justify-center">Error {error.message}</div>;

  return (
    <div className="lg:p-20 px-6 py-10">
      <h1 className="text-center text-4xl md:text-5xl">Rick and Morty</h1>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
        {data.characters.results.map((character) => (
          <div key={character.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
            <img src={character.image} className="w-full h-auto" alt={character.name} />
            <div className="p-4">
              <div className="text-xl">{character.name}</div>
              <div className="mt-1">
                  This character is {character.species} and {character.status === 'unknown' ? 'missing': character.status}
              </div>
              <div>Location: {character.location.name}</div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        onChange={onChange}
        current={current}
        total={data.characters.info.pages}
        className="mt-12 block mx-auto w-fit text-xl"
      />

    </div>
  );
}

export default App;
