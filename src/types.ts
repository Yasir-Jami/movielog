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

export interface Genres {
  Action: boolean,
  Adventure: boolean,
  Animation: boolean,
  Comedy: boolean,
  Crime: boolean,
  Documentary: boolean,
  Drama: boolean,
  Family: boolean,
  Fantasy: boolean,
  Horror: boolean,
  Musical: boolean,
  Mystery: boolean,
  Romance: boolean,
  Sport: boolean,
  Thriller: boolean,
  Western: boolean,
}

export interface MovieFilters {
  SearchFilter: string,
  GenreFilter: Genres,
  FavoriteFilter: boolean,
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