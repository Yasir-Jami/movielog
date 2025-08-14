export interface MovieInfo {
  Title: string,
  Poster: string,
  Year?: string,
  Plot?: string,
  Genre?: string,
  ImdbRating?: string,
}

export interface MovieList {
  listName: string,
}

export interface MovieLists {
  movieLists: MovieInfo[]
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
  itemLabel: string,
  itemIcon?: string,
}

export interface ErrorInfo {
  message: string,
  status?: number,
}

export interface ApiError extends ErrorInfo {
  message: string,
  status?: number,
}