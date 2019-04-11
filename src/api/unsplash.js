import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID fbf8402641e77a4939313cd15f8b2ba1a2e8cd8a02e652dea47837ba7c776050"
  }
});
