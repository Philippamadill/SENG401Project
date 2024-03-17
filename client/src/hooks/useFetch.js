import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch(url)
      .then(response => {
        if (!response.ok) { 
          // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return response.json();
      })
      .then(data => {
        setData(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      })
  }, [])

  return { data, error };
}

export default useFetch;