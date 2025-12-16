import "./App.css";
import PlayerControls from "./components/PlayerControls";

import sinisterMusic from "./assets/sinister.mp3";
import { useState } from "react";
import MusicContext from "./contexts/MusicContext";
const App = () => {
  const [state, setState] = useState({
    audioPlayer: new Audio(sinisterMusic),
    isPlaying: false,
  });
  return (
    <>
      <MusicContext.Provider value={{ state, setState }}>
        <p>hello</p>
        <PlayerControls />
      </MusicContext.Provider>
    </>
  );
};

export default App;
