import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import TvList from "./TvList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const tv = useSelector((store) => store.tv);
  console.log(tv);

  return (
    <div className="bg-black">
      <div className="-mt-52 p-2 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />

        <TvList title={"Popular TV"} tv={tv.popularTv} />
        <TvList title={"Top Rated TV"} tv={tv.topRatedTv} />
        <TvList title={"On The Air"} tv={tv.onTheAir} />
        <TvList title={"Airing Today"} tv={tv.airingToday} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
