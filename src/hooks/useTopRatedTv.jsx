import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTv } from "../utils/tvSlice";
import { useDispatch, useSelector } from "react-redux";

const useTopRatedTv = () => {
  // memoization
  const topRatedTv = useSelector((store) => store.movies.topRatedTv);

  const dispatch = useDispatch();
  const getTopRatedTv = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTopRatedTv(json.results));
  };

  useEffect(() => {
    // memoization
    !topRatedTv && getTopRatedTv();
  }, []);
};

export default useTopRatedTv;
