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

export interface MovieCardProps {
  movie: MovieInfo,
  handleDeleteMovie: (id: string) => void,
  handleFavoriteMovie: (id: string) => void,
}

export interface MovieList {
  listId?: number,
  listName: string,
  movies: MovieInfo[],
  itemIcon?: string,
  listDescription?: string,
}

export interface MovieListCardProps {
  movieList?: MovieList,
  listId?: number,
  listName: string,
  numberOfMovies: number,
  listTags?: string[],
  listDescription?: string,
  setSelectedTab?: React.Dispatch<React.SetStateAction<MainContentTab>>,
}

export interface MovieGridProps {
  movieListName: string,
  movieCount: number,
  movieArray: Array<MovieInfo>,
}

export interface SidebarTabProps {
  itemId: number,
  itemLabel: MainContentTab,
  itemIcon?: React.JSX.Element,
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

export interface MovieFilters {
  SearchFilter: string,
  GenreFilter: Genres,
  FavoriteFilter: boolean,
  FilteredByKeyword: boolean,
  FilteredByGenre: boolean,
  isFiltered: boolean, // applying a filter increments this variable by 1
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

/* Enums */

export enum MainContentTab {
  Home = "Home",
  Lists = "Lists",
  Reviews = "Reviews",
  Settings = "Settings",
  Login = "Login",
}

export enum MovieSortMethod {
  Default = 0,
  Alphanumerically = 1,
  Rating = 2
}