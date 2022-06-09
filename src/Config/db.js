const { connect } = require("mongoose");

module.exports = () => {
  return connect("mongodb+srv://Dhruv:1234@cluster0.2vwhcd4.mongodb.net/test");
};
