module.exports = {
  server: {
    port: process.env.APP_PORT || 8080
  },
  mongo: {
    connection_url:
      process.env.MONGO_CONNECTION_STR || 'mongodb://localhost:27017/splitbill'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'SECRET'
  }
};
