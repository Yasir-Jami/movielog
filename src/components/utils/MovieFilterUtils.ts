import { MovieFilters, MovieInfo } from "types";

export function checkIfFiltered(filters: MovieFilters): boolean {
  if (filters.FilteredByGenre || filters.FilteredByKeyword || filters.FavoriteFilter) {
    return true;
  }
  return false;
}

export function checkGenreFilters(filters: MovieFilters): boolean {
  //filters.FilteredByGenre = true;
  // Check each genre if a filter is applied
  console.log(filters.GenreFilter);

  return false;

  return true;
}

export function applyGenreFilters(movieArray: MovieInfo[], filters: MovieFilters): MovieInfo[] {
  console.log(movieArray);
  console.log(filters);

  return movieArray;
}