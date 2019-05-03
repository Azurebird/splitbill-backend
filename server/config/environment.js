module.exports = {
  server: {
    port: 8080
  },
  mongo: {
    connection_url:
      process.env.MONGO_CONNECTION_STR || 'mongodb://localhost:27017/splitbill'
  }
};
