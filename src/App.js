import Router from "./router/router"
import { SongsContext } from "./context/songs.context";
import { useState } from "react";

// Styles
import './App.scss';

function App() {

  const [songs, setSongs] = useState([])
  return (
    <SongsContext.Provider value={{songs, setSongs}}>
      <div className="App">
        <Router />
      </div>
    </SongsContext.Provider>
  );
}

export default App;
