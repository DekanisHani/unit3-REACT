import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpotyHome from "./components/SpotyHome";
import SpotyArtist from "./components/SpotyArtist";
import SpotyAlbums from "./components/SpotyAlbums";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SpotyHome />} />
          <Route path="/album/:id" element={<SpotyAlbums />} />
          <Route path="/artist/:id" element={<SpotyArtist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
