import { MovieListCardProps } from "types";

const testlist1: MovieListCardProps = {
  listId: 0,
  listName: "Watching",
  numberOfMovies: 12,
  listDescription: "Movies you're watching",
  listTags: ["Default"],
};

const testlist2: MovieListCardProps = {
  listId: 1,
  listName: "Watch Later",
  numberOfMovies: 0,
  listDescription: "Movies to watch",
  listTags: ["Default"],
};

const testlist3: MovieListCardProps = {
  listId: 2,
  listName: "Watched",
  numberOfMovies: 13,
  listDescription: "Movies you've watched",
  listTags: ["Default"],
};

const testlist4: MovieListCardProps = {
  listId: 3,
  listName: "Action",
  numberOfMovies: 328,
  listTags: ["Action", "Comedy", "Green"],
};

const testlist5: MovieListCardProps = {
  listId: 4,
  listName: "Adventure",
  numberOfMovies: 118,
  listTags: ["Action", "Comedy", "Adventure", "Comedy", "Adventure", "Comedy", "Adventure", "Comedy", "Adventure", "Comedy", "Adventure",],
};

const movieListArray: MovieListCardProps[] = [testlist1, testlist2, testlist3, testlist4, testlist5];

logger.log(movieListArray);