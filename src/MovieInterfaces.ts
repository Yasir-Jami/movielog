export interface MovieInfo {
  Title: string,
  Poster: string,
  Year?: string,
  Plot?: string,
  ImdbRating?: string,
}

export interface MovieQuery {
  Title?: string,
  ImdbId?: string,
}
