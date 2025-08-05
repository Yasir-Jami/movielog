import { MovieLists } from "types";

const getListsUrl = "GG";

async function retrieveMovieLists(): Promise<MovieLists[] | null> {
    let movieLists: MovieLists[] = [];

    try {
      const response: Response = await fetch(getListsUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      logger.error("Error:", errorData);
    }
    }
    catch (err) {
      logger.error("Error while fetching movie lists:", err);
    }

    return movieLists;
}


export default retrieveMovieLists;