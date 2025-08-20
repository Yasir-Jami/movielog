export interface MovieInfo {
  Title: string,
  Poster: string,
  Year?: string,
  Plot?: string,
  Genre?: string,
  ImdbRating?: string,
  imdbID: string,
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


/* Enums */
export enum AddMovieModalDisplay {
    Invisible="add-movie__modal",
    Visible="add-movie__modal--active"
};