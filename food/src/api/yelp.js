import axios from "axios";
import env from "../config/env";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      `Bearer ${env.YELP_API_KEY}`,
  },
});
