import React, { useEffect, useState } from 'react';
import axios from 'axios';
let apiKey: string = import.meta.env.VITE_API_KEY;

function getApiData () { 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Make GET request to fetch data
    axios
        .get("http://www.omdbapi.com/?i=tt1630029&apikey="+apiKey)
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return data;
}

function getApiImage() {
  const data = getApiData();
  return data;
}

/*
function getApiImage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Make GET request to fetch data
    axios
        .get("http://www.img.omdbapi.com/?i=tt1630029&apikey="+apiKey)
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return data;
}
*/


export default getApiData