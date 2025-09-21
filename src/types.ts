export interface MovieMetadata {
  Title: string,
  Poster: string,
  Year?: string,
  Plot?: string,
  Genre?: string,
  imdbRating?: string,
  imdbID?: string,
}

export interface MovieInfo {
  imdbID?: string,
  isFavorite: boolean,
  rating: number,
  movieMeta: MovieMetadata,
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

export interface MovieCardProps {
  movie: MovieInfo,
  handleDeleteMovie: (id: string) => void,
  handleFavoriteMovie: (id: string) => void,
}

export interface SidebarTabProps {
  itemId: number,
  itemLabel: MainContentTab,
  itemIcon?: React.JSX.Element,
  itemCount?: number,
}

export interface ListCardProps {
  listId: number,
  listName: string,
  itemIcon?: string,
  movieCount?: number,
  listDescription?: string,
}


export interface ErrorInfo {
  message: string,
  status?: number,
}

export interface ApiError extends ErrorInfo {
  message: string,
  status?: number,
}

export type GenreEntry = {
  name: string, 
  filterApplied: boolean
};

export interface Genres {
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
  GenreFilter: Genres,
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


export enum MainContentTab {
  Home = "Home",
  Lists = "Lists",
  Reviews = "Reviews",
  Settings = "Settings",
  Login = "Login",
}