import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./views/Home"
import Pokemones from "./views/Pokemones";


const  App = () => {
  

  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route
        path="/"
        element={<Home />}
        />
        <Route
        path="/pokemones"
        element={<Pokemones />} />

      </Routes>

    </div>
  );
};

export default App;
