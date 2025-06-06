import { useEffect, useState } from 'react';
import axios from 'axios';
const serverUrl: string = import.meta.env.VITE_API_BASE_URL;
const moviePath: string = import.meta.env.VITE_API_MOVIE_PATH;
import {MovieQuery, MovieInfo} from "src/interfaces"

function getMovieApiData(props: MovieQuery): MovieInfo { 
  const [movieData, setMovieData] = useState<MovieInfo>();
  const movieQuery = apiQueryBuilder(props.Title, props.ImdbId);
  const url = `${serverUrl}${moviePath}`;

  useEffect(() => {
    // Make GET request to fetch data
    axios.get(url, {
          headers: {
            'Content-Type': 'application/json'
          },
          params: {
            query: movieQuery,
          },
        })
        .then((response) => {
            setMovieData(response.data);
        })
        .catch((err) => {
            console.log("Error while getting movie data: ", err);
        });
  }, [movieQuery]);
  
  // TODO - pass an error object if no data is retrieved
  if (movieData == null) {
    const fakeData: MovieInfo = {
      Title: "",
      Poster: "nothing"
    }
    return fakeData;
  }
  
  return movieData;
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
function apiQueryBuilder(title?: string, id?: string): string {
  const newQuery: MovieQuery = {
    Title: `?t=${title}`,
    ImdbId: `?i=${id}`,
  }
  let finalQuery = "";

  if (newQuery.Title != null) {
    newQuery.Title = newQuery.Title.replace(/ /g, '+');
    finalQuery = newQuery.Title;
  }

  // Search by Imdb ID
  else if (newQuery.ImdbId != null) {
    finalQuery = newQuery.ImdbId;
  }

  return finalQuery;
}

export default getMovieApiData