import TvCard from "./TvCard";

const TvList = ({ title, tv }) => {
  return (
    <>
      <div className="px-4">
        <h1 className="text-lg md:text-xl py-2  text-white">{title}</h1>
        <div className="flex overflow-y-scroll no-scrollbar">
          <div className="flex">
            {tv?.map((tv) => (
              <TvCard key={tv.id} posterPath={tv.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TvList;
