import Axios from "axios";

const API_URL = "https://5f9a7f959d94640016f70c7b.mockapi.io/";

export default Axios.create({
  baseURL: API_URL,
  timeout: 3000
})
