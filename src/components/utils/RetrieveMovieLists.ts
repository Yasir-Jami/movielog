import { MovieList } from "types";

const url = `${import.meta.env.VITE_API_LOCAL_URL}${import.meta.env.VITE_API_MOVIE_LISTS}${import.meta.env.VITE_API_RETRIEVE_LIST}`;

async function fetchAllLists() {
    try {
      const response: Response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const jsonData: MovieList[] = await response.json();

    if (!response.ok) {
      logger.error("Error:", jsonData);
    }

    else {
      return jsonData;
    }

    }
    catch (err) {
      logger.error("Error while fetching movie lists:", err);
    }

    return [];
}


function RetrieveMovieLists() {
    const lists = fetchAllLists();

    // Clean lists data 

    console.log(lists);

    return lists;
}

export default RetrieveMovieLists;