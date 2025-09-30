import React, { createContext, useContext, useRef } from "react";

const MovieSearchContext = createContext<React.RefObject<HTMLInputElement | null>| null>(null);

export const MovieSearchProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const movieSearchRef = useRef<HTMLInputElement | null>(null);
  
  return (
    <MovieSearchContext.Provider value={movieSearchRef}>
      {children}
    </MovieSearchContext.Provider>
  )
}

export const useMovieSearchRef = () => {
  return useContext(MovieSearchContext);
}