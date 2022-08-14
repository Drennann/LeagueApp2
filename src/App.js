import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Play from "./pages/Play"

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/play" element={<Play/>}></Route>
    </Routes>
  );
}

export default App;
