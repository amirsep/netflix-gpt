import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addAiringToday } from "../utils/tvSlice";
import { useDispatch } from "react-redux";

const useAiringToday = () => {
  const dispatch = useDispatch();
  const getAiringToday = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    dispatch(addAiringToday(json.results));
  };

  useEffect(() => {
    getAiringToday();
  }, []);
};

export default useAiringToday;
