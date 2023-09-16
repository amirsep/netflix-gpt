import { useDispatch } from "react-redux";
import { addTeaserVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTeaser = ({ movieId }) => {
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
    getMovieVideos();
  }, []);
};

export default useMovieTeaser;
