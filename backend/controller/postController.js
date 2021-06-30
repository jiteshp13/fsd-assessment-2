const axios = require("axios");

exports.getPosts = async (req, res) => {
  await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((data) => {
      // console.log(data);
      return res.status(200).send(data.data);
    })
    .catch((error) => {
      console.error("Error reteriving posts", error);
      return res.status(500).send("Error reteriving posts");
    });
};

exports.getComments = async (req, res) => {
  await axios.get("http://localhost:7000/getPosts")
    .then((data) => {
      console.log(data);
      return res.status(200).send("Comments sent");
    })
    .catch((error) => {
      console.error("Error reteriving comments", error);
      return res.status(500).send("Error reteriving posts");
    });
};
