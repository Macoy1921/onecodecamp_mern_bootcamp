import React, { useState, useEffect} from 'react';
import axios from 'axios';

const AboutUs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.boredapi.com/api/activity');

        const result = response.data;
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }

    };

    fetchData();
  }, [])

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <div>
          <p>Activity: {data?.activity}</p>
          <p>Type: {data?.type}</p>
        </div>

      )}
    </div>
  )
}

export default AboutUs;