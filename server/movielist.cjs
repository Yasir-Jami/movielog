class MovieList {
  constructor(uri, dbName, movieListCollectionName) {
    this.uri = uri;
    this.dbName = dbName;
    this.movieListCollectionName = movieListCollectionName;
  }
}

modules.export = MovieList;