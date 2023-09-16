import { useSelector } from "react-redux";
import useMovieTeaser from "../hooks/useMovieTeaser";

const VideoBackground = ({ movieId }) => {
  const teaserVideo = useSelector((store) => store?.movies?.teaserVideo);
  useMovieTeaser({ movieId });

  return (
    <>
      <div className="w-screen">
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            teaserVideo?.key +
            "?autoplay=1&mute=1&loop=1&playlist=" +
            teaserVideo?.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
