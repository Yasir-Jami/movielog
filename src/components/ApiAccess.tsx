import { useEffect, useState } from 'react';
import axios from 'axios';
//const serverUrl: string = import.meta.env.VITE_LOCAL_SERVER_URL;
const serverUrl: string = import.meta.env.VITE_REMOTE_SERVER_URL;
const moviePath: string = import.meta.env.VITE_SERVER_API_MOVIE_PATH;
const movieTitle: string = import.meta.env.VITE_MOVIE_TITLE;

interface Query {
  Title: string,
  /*
  Year: string,
  Plot: string,
  Response: string,
  */
}

function getMovieApiData() : object { 
  const [data, setData] = useState([]);
  const query = apiQueryBuilder(movieTitle);

  useEffect(() => {
    // Make GET request to fetch data
    axios
        .get(`${serverUrl}${moviePath}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          params: {
            query: query,
          },
        })
        .then((response) => {
            setData(response.data);
        })
        .catch((err) => {
            console.log("Error while getting movie data: ", err)
        });
  }, []);

  return data;
}

/**
 * Builds a query before calling external movie API based on passed arguments
 * Query rules for OMDB
 * Title: ?t= (e.g. ?t=avatar+way+of+water)
 * Year: y= (e.g. y=2014)
 * Plot: &plot=full (short or full, short by default and only needs an option for full)
 * Response: &r= (json or xml, json by default and only needs an option for xml)
 * Example: http://www.omdbapi.com/?t=hunter+x+hunter&y=2011-2013&plot=full&r=xml
 * Title: "hunter x hunter"
 * Year: "2011-2013"
 * Plot: full
 * Response: xml
 * imdb ID: ?i=
 * @returns {string} Final query
 */
function apiQueryBuilder(
  title: string, 
  /*
  year: string, 
  plot: string, 
  response: string */) {
  const newQuery: Query = {
    Title: `?t=${title}`,
    /*
    Year: `y=${year}`,
    Plot: `plot=${plot}`,
    Response: `${response}`
    */
  }

  newQuery.Title = newQuery.Title.replace(/ /g, '+');
  const finalQuery = newQuery.Title;

  return finalQuery;
}


export default getMovieApiData