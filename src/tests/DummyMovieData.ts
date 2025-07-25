import { MovieInfo } from "interfaces";

function testMovieArray(): MovieInfo[] {
  let movieArray: MovieInfo[] = [];

  // Test values
  const movie1: MovieInfo = {
    Title: "The Matrix",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_SX300.jpg",
    Year: "1999",
    Genre: "Action, Sci-Fi",
  }

  const movie2: MovieInfo = {
    Title: "Sinners",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_SX300.jpg",
    Year: "2025",
    Genre: "Action, Drama, Horror",
  }

  const movie3: MovieInfo = {
    Title: "The Big Lebowski",
    Poster: "https://m.media-amazon.com/images/M/MV5BY2E3OWQ5OWYtYTRkMC00NjVjLWIzZDQtNmRmM2ZiYTIyYmYxXkEyXkFqcGc@._V1_SX300.jpg",
    Year: "1998",
    Genre: "Comedy, Crime",
  }

  const movie4: MovieInfo = {
    Title: "The Shawshank Redemption",
    Poster: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg",
    Year: "1994",
    Genre: "Drama",
  }

  const movie5: MovieInfo = {
    Title: "Schindler's List",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_SX300.jpg",
    Year: "1993",
    Genre: "Biography, Drama, History",
  }

  const movie6: MovieInfo = {
    Title: "Grownups",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA0ODYwNzU5Nl5BMl5BanBnXkFtZTcwNTI1MTgxMw@@._V1_SX300.jpg",
    Year: "2010",
    Genre: "Comedy",
  }

  const movie7: MovieInfo = {
    Title: "Space Jam",
    Poster: "https://m.media-amazon.com/images/M/MV5BZGQ3ZDk0M2MtZDNmNi00OWE3LThiODUtMTU3NmVjMTA0ZGQyXkEyXkFqcGc@._V1_SX300.jpg",
    Year: "1996",
    Genre: "Animation, Adventure, Comedy",
  }

  const movie8: MovieInfo = {
    Title: "Django Unchained",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
    Year: "2012",
    Genre: "Drama, Western",
  }

  const movie9: MovieInfo = {
    Title: "The Princess Bride",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjFiOTEyNGMtN2E4MC00ZjZlLTk3ZDQtNTU1ZGNiZTA1MzJlXkEyXkFqcGc@._V1_SX300.jpg",
    Year: "1987",
    Genre: "Adventure, Comedy, Family",
  }

  movieArray.push(movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9);

  console.log(movieArray);

  return movieArray;
}


export default testMovieArray;