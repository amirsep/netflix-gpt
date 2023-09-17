import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularTv } from "../utils/tvSlice";

const usePopularTv = () => {
  const dispatch = useDispatch();
  const getPopularTv = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularTv(json.results));
  };

  useEffect(() => {
    getPopularTv();
  }, []);
};

export default usePopularTv;
