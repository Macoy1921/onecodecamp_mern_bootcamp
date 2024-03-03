import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JokeComponent = () => {
  const [fetchJokeData, setFetchJoke] = useState(null);
  const [axiosJoke, setAxiosJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchResponse = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        if (!fetchResponse.ok) {
          throw new Error(`Fetch API error! Status: ${fetchResponse.status}`);
        }
        const fetchedJokeData = await fetchResponse.json();
        setFetchJoke(fetchedJokeData.joke);

        const axiosResponse = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
        setAxiosJoke(axiosResponse.data.joke);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <div>
          <h2>Fetch Api Joke</h2>
          <p>{fetchJokeData}</p>

          <h2>Axios Joke</h2>
          <p>{axiosJoke}</p>
        </div>
      )}
    </div>
  );
};

export default JokeComponent;
