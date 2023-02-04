import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";

import MainPage from "./pages/MainPage";
import FilterPage from "./pages/FilterPage";
import Favourites from "./pages/Favourites";
import Channel from "./pages/Channel";
import MainLayout from "./layouts/MainLayout";
import HeaderLayout from "./layouts/HeaderLayout";
import Post from "./pages/Post";

import axios from "./services/axios"
import { fetchFavorites } from "./redux/slices/favorite/asyncActions";

import "./styles/index.scss"

const tg = window.Telegram.WebApp;

function App() {
  const dispatch = useDispatch();

  const userVerification = async () => {
    try {
      await axios.post("/user/verification/", {
        user_id: tg.initDataUnsafe?.user?.id || "503118393",
      })
    } catch (error) {
      console.log("Cant post user verification");
    }
  };

  React.useEffect(() => {
    tg.ready();

    dispatch(fetchFavorites(tg.initDataUnsafe?.user?.id || "503118393"));

    userVerification();
  }, [])

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<MainPage />} />
          <Route path="favoruites" element={<Favourites />} />
          <Route path="filter" element={<FilterPage />} />
        </Route>
        <Route path="/posts/" element={<HeaderLayout />}>
          <Route path="post" element={<Post />} />
          <Route path="channel/:channelId" element={<Channel />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
