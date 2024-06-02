import { useParams } from "react-router-dom";
import PopBrowse from "../components/Popups/PopBrowse";

const CardPage = () => {
  let { id } = useParams();
  return <PopBrowse id={id} />;
};

export default CardPage;
