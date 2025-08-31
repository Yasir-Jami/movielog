export interface MovieInfo {
  Title: string,
  Poster: string,
  Year?: string,
  Plot?: string,
  Genre?: string,
  ImdbRating?: string,
  imdbID?: string,
}

export interface MovieList {
  listId?: number,
  listName: string,
  movies: MovieInfo[],
}

export interface MovieGridProps {
  movieListName: string,
  movieCount: number,
  movieArray: Array<MovieInfo>,
}

export interface MovieQuery {
  Title?: string,
  ImdbId?: string,
}

export interface SidebarProps {
  selectedList: number,
}

export interface SidebarItemProps {
  itemId: number,
  itemLabel: string,
  itemIcon?: string,
  itemCount?: number,
}

export interface ErrorInfo {
  message: string,
  status?: number,
}

export interface ApiError extends ErrorInfo {
  message: string,
  status?: number,
}

type GenreEntry = {
  name: string, 
  filterApplied: boolean
};

export interface Genre {
  Action: GenreEntry,
  Adventure: GenreEntry,
  Animation: GenreEntry,
  Comedy: GenreEntry,
  Crime: GenreEntry,
  Documentary: GenreEntry,
  Drama: GenreEntry,
  Family: GenreEntry,
  Fantasy: GenreEntry,
  Horror: GenreEntry,
  Musical: GenreEntry,
  Mystery: GenreEntry,
  Romance: GenreEntry,
  Sport: GenreEntry,
  Thriller: GenreEntry,
  Western: GenreEntry,
}

export interface MovieFilters {
  SearchFilter: string,
  GenreFilter: Genre,
  FavoriteFilter: boolean,
  FilteredByKeyword: boolean,
  FilteredByGenre: boolean,
  isFiltered: boolean, // applying a filter increments this variable by 1
}

export enum MovieSortMethod {
  Default = 0,
  Alphanumerically = 1,
  Rating = 2
}

/* Enums */
export enum AddMovieModalDisplay {
    Invisible="add-movie__modal",
    Visible="add-movie__modal--active"
};