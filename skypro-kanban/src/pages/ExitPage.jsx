import PopExit from "../components/Popups/PopExit";
import { useNavigate } from "react-router-dom";

const ExitPage = ({ authUser }) => {
  const navigate = useNavigate();
  const auth = () => {
    authUser(false);
    navigate("/login");
  };
  return <PopExit logout={auth} />;
};

export default ExitPage;
