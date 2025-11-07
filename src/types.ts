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
  movieMeta: MovieMetadata, // replace with metadata
}

export interface MovieCardProps {
  movie: MovieInfo,
  handleDeleteMovie: (id: string) => void,
  handleFavoriteMovie: (id: string) => void,
}

export interface MovieList {
  movies: MovieInfo[],
  listId?: number,
  listName: string,
  listTags?: string[],
  listDescription?: string,
  itemIcon?: string,
}

export interface MovieListCardProps {
  movieList: MovieList,
  listName: string,
  movieCount: number,
  listTags?: string[],
  listDescription?: string,
  setCurrentMovieList: React.Dispatch<React.SetStateAction<MovieList>>,
  handleListSelection: (currentMovieList: MovieList) => void,
  handleModalClick: () => void,
  viewType: ViewType,
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

export interface LoaderProps {
  passedStyle?: React.CSSProperties,
  color?: string,
  size?: number,
}

export interface ViewTypeProps {
  selectedViewType: ViewType,
  handleViewSelection: (view: ViewType) => void,
  className: string,
}

export interface ViewTypeItemProps {
  itemViewType: ViewType,
  itemIcon: React.JSX.Element,
  viewTypeProps: ViewTypeProps,
}


/* 
Modals

Modal modules consist of two things:
1. Label
2. Type

Label is the label of the text box they're given
Type is the type of module,
e.g., basic text box, dropdown menu, counter (for numerical values)

All displayed in a grid view.
*/

export interface ModalProps {
  header?: string,
  modalModules: ModalModule[],
  modalOpen: boolean,
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface ModalModule {
  label?: string,
  elementLabel?: string,
  moduleType: ModalModuleType,
}

export enum ModalModuleType {
  Textbox = "modal-textbox",
  Dropdown = "modal-dropdown",
  Counter = "modal-counter",
  Date = "modal-date",
  Button = "modal-button",
  Aside = "modal-aside",
  Special = "modal-special",
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

export enum ViewType {
  Card = "card",
  Detailed = "detailed",
  Compact = "compact",
}