import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addOnTheAir } from "../utils/tvSlice";
import { useDispatch } from "react-redux";

const useOnTheAir = () => {
  const dispatch = useDispatch();
  const getOnTheAir = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    dispatch(addOnTheAir(json.results));
  };

  useEffect(() => {
    getOnTheAir();
  }, []);
};

export default useOnTheAir;
