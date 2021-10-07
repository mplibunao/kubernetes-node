const mongoose = require("mongoose");
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } =
  process.env;

//const options = {
//useNewUrlParser: true,
//reconnectRetries: Number.MAX_VALUE,
//reconnectInterval: 500,
//connectionTimeoutMS: 10000,
//};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log("err", err); // eslint-disable-line no-console
  });
