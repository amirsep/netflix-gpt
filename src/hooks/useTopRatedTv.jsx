import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTv } from "../utils/tvSlice";
import { useDispatch } from "react-redux";

const useTopRatedTv = () => {
  const dispatch = useDispatch();
  const getTopRatedTv = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    dispatch(addTopRatedTv(json.results));
  };

  useEffect(() => {
    getTopRatedTv();
  }, []);
};

export default useTopRatedTv;
