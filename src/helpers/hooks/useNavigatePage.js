import { useLocation, useNavigate } from "react-router-dom";

export const useNavigatePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    if (location.key === "default") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  return {
    goBack
  }
};