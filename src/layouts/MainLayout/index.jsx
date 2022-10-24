import { Outlet } from "react-router-dom";

import BottomNavBar from "../../components/BottomNavBar";
import Header from "../../components/Header";

const MainLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      <BottomNavBar />
    </>
  )
}

export default MainLayout;