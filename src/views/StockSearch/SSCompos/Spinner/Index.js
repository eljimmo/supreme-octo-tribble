import { ImSpinner4 } from "react-icons/im";
import "./style.css";

const Spinner = () => {
  return (
    <>
      <div className="spinner-container">
        <ImSpinner4 className="spinner" size="50px" />
      </div>
    </>
  );
};

export default Spinner;