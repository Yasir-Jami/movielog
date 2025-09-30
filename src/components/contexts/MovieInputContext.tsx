import React, { createContext, useContext, useRef } from "react";

interface MovieInputRefs {
  movieSearchRef: React.RefObject<HTMLInputElement | null>,
  listSearchRef: React.RefObject<HTMLInputElement | null>,
}

const MovieInputContext = createContext<MovieInputRefs | null>(null);;

export const MovieInputProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const movieSearchRef = useRef<HTMLInputElement | null>(null);
  const listSearchRef = useRef<HTMLInputElement | null>(null);
  const movieInputContextValue: MovieInputRefs = {
    movieSearchRef,
    listSearchRef,
  }
  
  return (
    <MovieInputContext.Provider value={movieInputContextValue}>
      {children}
    </MovieInputContext.Provider>
  )
}

export const useMovieInputRef = () => {
  const context = useContext(MovieInputContext);
  if (!context) {
    throw new Error("useMovieSearchRefs must be used within the MovieInputProvider");
  }
  return context;
}