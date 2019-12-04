import axios from "axios";

export default {
  // Gets all books
  getTitle: function() {
    return axios.get("/api/books");
  },
  
};
