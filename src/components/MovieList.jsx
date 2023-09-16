import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <>
      <div>
        <h1>{title}</h1>
        <div>
          <MovieCard />
        </div>
      </div>
    </>
  );
};

export default MovieList;
