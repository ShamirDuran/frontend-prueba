import axios from "axios";
import PropTypes from "prop-types";

const base_url = "http://localhost/backend_prueba";

export const customAxios = async (endpoint, data = {}, method = "GET") => {
  const url = `${base_url}/${endpoint}`;

  switch (method) {
    case "GET":
      const resp = await axios.get(url);
      return resp.data;
    case "POST":
      break;

    case "PUT":
      break;

    default:
      break;
  }
};

customAxios.propTypes = {
  endpoint: PropTypes.string.isRequired,
  data: PropTypes.object,
  method: PropTypes.string,
};
