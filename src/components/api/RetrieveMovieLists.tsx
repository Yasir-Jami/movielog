import { MovieLists } from "interfaces";

const getListsUrl = "GG";

async function retrieveMovieLists(userCookie: string): Promise<MovieLists[] | null> {
    let movieLists: MovieLists[] = [];

    try {
      const response: Response = await fetch(getListsUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCookie),
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