import { Routes, Route } from "react-router-dom"

import MainPage from "./pages/MainPage";
import FilterPage from "./pages/FilterPage";
import Favourites from "./pages/Favourites";
import Channel from "./pages/Channel";
import MainLayout from "./layouts/MainLayout";
import HeaderLayout from "./layouts/HeaderLayout/indes";
import "./styles/index.scss"
import Post from "./pages/Post";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<MainPage />} />
          <Route path="favoruites" element={<Favourites />} />
        </Route>
        <Route path="/posts/" element={<HeaderLayout />}>
          <Route path=":postId" element={<Post />} />
          <Route path="filter" element={<FilterPage />} />
          <Route path="channel/:channelId" element={<Channel />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
