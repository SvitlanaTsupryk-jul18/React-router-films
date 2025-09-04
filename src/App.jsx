import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MovieDetail from "./pages/MovieDetail";
import Favorites from "./pages/Favorites";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const setLoged = (userName) => {
    setUser(userName);
  };

  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login logged={setLoged} />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/movie/:id" element={<MovieDetail />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
