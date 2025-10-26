import { Genres, MovieFilters, MovieMetadata } from "types";

export function defaultGenreFilters() {
  const genres: Genres = {
    Action: { name: "Action", filterApplied: false },
    Adventure: { name: "Adventure", filterApplied: false },
    Animation: { name: "Animation", filterApplied: false },
    Comedy: { name: "Comedy", filterApplied: false },
    Crime: { name: "Crime", filterApplied: false },
    Documentary: { name: "Documentary", filterApplied: false },
    Drama: { name: "Drama", filterApplied: false },
    Family: { name: "Family", filterApplied: false },
    Fantasy: { name: "Fantasy", filterApplied: false },
    Horror: { name: "Horror", filterApplied: false },
    Musical: { name: "Musical", filterApplied: false },
    Mystery: { name: "Mystery", filterApplied: false },
    Romance: { name: "Romance", filterApplied: false },
    Sport: { name: "Sport", filterApplied: false },
    Thriller: { name: "Thriller", filterApplied: false },
    Western: { name: "Western", filterApplied: false },
  }

  return genres;
}

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
}

export function applyGenreFilters(movieArray: MovieMetadata[], filters: MovieFilters): MovieMetadata[] {
  console.log(movieArray);
  console.log(filters);

  return movieArray;
}

export function clearAllFilters(filters: MovieFilters): MovieFilters {
  filters = {
    SearchFilter: "",
    GenreFilter: defaultGenreFilters(),
    FavoriteFilter: false,
    FilteredByKeyword: false,
    FilteredByGenre: false,
  } as MovieFilters;

  return filters;
}