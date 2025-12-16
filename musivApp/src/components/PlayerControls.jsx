import { FaPause, FaPlay, FaStop } from "react-icons/fa6";
import useMusicPlayer from "../hooks/useMusicPlayer";
import "../App.css";
const PlayerControls = () => {
  const music = useMusicPlayer();
  return (
    <div className="player-controls">
      Controls here
      <button
        className="play-button"
        onClick={music.play}
        disabled={music.isPlaying}
      >
        <FaPlay />
      </button>
      <button
        className="pause-button"
        onClick={music.pause}
        disabled={!music.isPlaying}
      >
        <FaPause />
      </button>
      <button className="stop-button" onClick={music.stop}>
        <FaStop />
      </button>
    </div>
  );
};

export default PlayerControls;
