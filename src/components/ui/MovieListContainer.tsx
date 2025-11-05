import "/src/styles/MovieListContainer.css";
import { useState } from "react";
import { MovieList, MovieFilters, Genres, MovieSortMethod } from "types";
import MovieGrid from "@components/ui/MovieGrid";
import ListSearch from "@components/ui/ListSearch";
import MovieFilter from "./MovieFilter";
import { defaultGenreFilters } from "utils/MovieFilterUtils";
import { ArrowLeft, List, LayoutList, LayoutGrid } from "lucide-react";
import { Loader } from "@components/ui/Loader";

interface MovieListContainerProps {
  currentMovieList: MovieList,
  handleBackButton: () => void,
}

enum ListContainerView {
  Card,
  Compact,
  Detailed,
}

interface ListContainerViewProps {
  selectedContainerView: ListContainerView,
  handleViewSelection: (view: ListContainerView) => void,
}

interface ListContainerViewItemProps {
  itemViewType: ListContainerView,
  itemIcon: React.JSX.Element,
  listContainerViewProps: ListContainerViewProps,
}

const ListContainerViewItem = (props: ListContainerViewItemProps) => {
  const {itemViewType, itemIcon, listContainerViewProps}: ListContainerViewItemProps = props;
  const isSelected = itemViewType === listContainerViewProps.selectedContainerView;
  
  return (
    <div className="list-container__view" onClick={() => {listContainerViewProps.handleViewSelection(itemViewType)}}>
      {itemIcon}
    </div>
  )
}

const ListContainerViews = ({listContainerViewProps}: {listContainerViewProps: ListContainerViewProps}) => {
    const size = 24; // icon size
    const listContainerViews = [
      {icon: LayoutGrid, type: ListContainerView.Card},
      {icon: LayoutList, type: ListContainerView.Compact},
      {icon: List, type: ListContainerView.Detailed},
    ]

    return (
      <div className="list-container__view-selector">
        {listContainerViews.map(({icon: Icon, type}, i) => {
          const isSelected = type === listContainerViewProps.selectedContainerView;
          const iconClass = `list-container__view-icon ${isSelected ? "active-view": ""}`;
      
          return (
            <ListContainerViewItem 
            key={i} 
            itemViewType={type}
            itemIcon={<Icon className={iconClass} size={size}/>}
            listContainerViewProps={listContainerViewProps}
            />
          );
        })}
      </div>
    )
  }

const genres: Genres = defaultGenreFilters();

function MovieListContainer({currentMovieList, handleBackButton}: MovieListContainerProps) {
  // Container View Selection
  const [selectedContainerView, setSelectedContainerView] = useState<ListContainerView>(ListContainerView.Card);
  const handleViewSelection = (view: ListContainerView) => {
    setSelectedContainerView(view);
  }
  const listContainerViewProps: ListContainerViewProps = {
    selectedContainerView: selectedContainerView,
    handleViewSelection: handleViewSelection,
  }
  
  // Sorting and filters
  const [movieFilters, setMovieFilters] = useState<MovieFilters>({
    SearchFilter: "",
    GenreFilter: genres,
    FavoriteFilter: false,
    FilteredByKeyword: false,
    FilteredByGenre: false,
  } as MovieFilters);
  const [movieSortMethod, setMovieSortMethod] = useState<MovieSortMethod>(MovieSortMethod.Default);
  const [currentMovieCount, setMovieCount] = useState<number>(0);
  let content: React.JSX.Element = <></>;
  let movieActionsContent: React.JSX.Element = <></>;
  
  // Could have skeleton while waiting for movie actions to render 
  if (currentMovieCount > 0) {
    movieActionsContent = 
    (
      <div className="movie-actions">
          <ListSearch 
          movieFilters={movieFilters} 
          setMovieFilters={setMovieFilters}/>
          <MovieFilter 
          movieFilters={movieFilters} 
          setMovieFilters={setMovieFilters} 
          setMovieSortMethod={setMovieSortMethod}/>
      </div>
    )
  }

  if (currentMovieList === null) {
    content = <Loader/>;
  }
  else {
    content = (
    <div className="list-container">
      <div className="list-container__grid">
        <div className="list-container__info">
          <div className="list-return-button" onClick={handleBackButton}>
            <ArrowLeft className="list-return-button-icon"></ArrowLeft>
            <p className="list-return-button-text">Back to Lists</p>
          </div>
          <div className="list-container__metadata">
            <h2 className="list-container__list-name">{currentMovieList.listName}</h2>
            <p className="list-container__movie-count">
            {currentMovieCount} {(currentMovieCount !== 1) ? "movies" : "movie"}</p>
          </div>
          <ListContainerViews listContainerViewProps={listContainerViewProps}/>
        </div>
        <MovieGrid 
        currentMovieList={currentMovieList} 
        currentMovieCount={currentMovieCount}
        setMovieCount={setMovieCount}
        currentMovieFilters={movieFilters}
        setMovieFilters={setMovieFilters}
        currentMovieSortMethod={movieSortMethod}
        />
        {movieActionsContent}
      </div>
    </div>
    )
  }

  return (
    <>{content}</>
  )
}

export default MovieListContainer;