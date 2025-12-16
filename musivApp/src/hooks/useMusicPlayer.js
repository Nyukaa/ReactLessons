import { useContext } from "react";
import MusicContext from "../contexts/MusicContext";
const useMusicPlayer = () => {
  const { state, setState } = useContext(MusicContext);

  const play = () => {
    state.audioPlayer.play();
    setState({ ...state, isPlaying: true });
  };

  const stop = () => {
    state.audioPlayer.pause();
    state.audioPlayer.currentTime = 0;
    setState({ ...state, isPlaying: false });
  };
  const pause = () => {
    if (state.isPlaying) {
      state.audioPlayer.pause();
      setState({ ...state, isPlaying: false });
    }
  };

  return {
    play,
    stop,
    pause,
    isPlaying: state.isPlaying,
  };
};
export default useMusicPlayer;
