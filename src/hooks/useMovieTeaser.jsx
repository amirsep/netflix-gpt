import { useDispatch, useSelector } from "react-redux";
import { addTeaserVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTeaser = ({ movieId }) => {
  // memoization
  const teaserVideo = useSelector((store) => store.movies.teaserVideo);

  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const filterTeaser = json?.results?.filter(
      (video) => video.type === "Teaser"
    );
    const teaser = filterTeaser.length ? filterTeaser[0] : json.results[0];

    dispatch(addTeaserVideo(teaser));
  };

  useEffect(() => {
    // memoization
    !teaserVideo && getMovieVideos();
  }, []);
};

export default useMovieTeaser;
