import axios from "axios";
import PropTypes from "prop-types";

const base_url = "http://localhost/backend_prueba";

export const customAxios = async (endpoint, data = {}, method = "GET") => {
  const url = `${base_url}/${endpoint}`;

  let resp;

  switch (method) {
    case "GET":
      resp = await axios.get(url);
      return resp.data;
    case "POST":
      const options = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: data,
        url,
      };
      resp = await axios(options);
      break;

    case "PUT":
      break;

    default:
      break;
  }

  return resp;
};

customAxios.propTypes = {
  endpoint: PropTypes.string.isRequired,
  data: PropTypes.object,
  method: PropTypes.string,
};
