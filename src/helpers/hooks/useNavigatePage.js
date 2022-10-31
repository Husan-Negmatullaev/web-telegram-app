import { useNavigate } from "react-router-dom";

export const useNavigatePage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return {
    goBack
  }
};