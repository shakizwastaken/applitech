import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./alert.css";

const Alert = ({ alert: { isAlert, msg, isErr }, clearAlert }) => {
  return (
    <div className="alertMsg">
      <div className="alertMsg_icon">
        <FontAwesomeIcon icon={isErr ? faXmarkCircle : faCheckCircle} />
      </div>
      <h1>{msg}</h1>
    </div>
  );
};

export default Alert;
