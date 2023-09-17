import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <>
      <div className="pt-[10%] flex justify-center">
        <form className=" w-1/2 bg-green-800 grid grid-cols-12 rounded-lg">
          <input
            type="text"
            className=" p-4 m-4 col-span-9 rounded-lg"
            placeholder={lang[langKey]?.gptSearchPlaceholder}
          />
          <button className="col-span-3 m-4 py-2 px-4 bg-red-600 text-white font-bold rounded-lg">
            {lang[langKey]?.search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
