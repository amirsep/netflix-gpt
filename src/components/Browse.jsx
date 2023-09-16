import useAiringToday from "../hooks/useAiringToday";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useOnTheAir from "../hooks/useOnTheAir";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTv from "../hooks/usePopularTv";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopRatedTv from "../hooks/useTopRatedTv";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  useTopRatedTv();
  usePopularTv();
  useOnTheAir();
  useAiringToday();

  return (
    <>
      <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
      </div>
    </>
  );
};

export default Browse;
