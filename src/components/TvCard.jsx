import { IMG_CDN_URL } from "../utils/constants";

const TvCard = ({ posterPath }) => {
  return (
    <>
      <div className="w-48 pr-2">
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
      </div>
    </>
  );
};

export default TvCard;
