const axios = require("axios");

exports.getPosts = (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((data) => {
      console.log(data);
      return res.status(200).send(data.data);
    })
    .catch((error) => {
      console.error("Error reteriving posts", error);
    });
};
