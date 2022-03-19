import {FaExclamationCircle} from "react-icons/fa";
import { Alert } from "@mantine/core";

const ErrorMessage = ({message}) => {
  return (
    <Alert icon={<FaExclamationCircle size={16} />} title="Unsuccessful!" color="red" variant="filled" >
        {message}
    </Alert>
  )
}

export default ErrorMessage