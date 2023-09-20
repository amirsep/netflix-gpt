import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
          className="h-screen object-cover md:h-fit"
          src={BG_URL}
          alt="Background Url"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
