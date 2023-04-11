require('dotenv').config()

module.exports = {
  development: {
    database: {
      url: process.env.MONGODB_DEV_URI,
      options: {
        auth: {
          authSource: 'admin'
        },
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    }
  },
  test: {
    database: {
      url: process.env.MONGODB_TEST_URI,
      options: {
        auth: {
          authSource: 'admin'
        },
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    }
  },
  production: {
    database: {
      url: process.env.MONGODB_URI,
      options: {
        auth: {
          authSource: 'admin'
        },
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    }
  }
}
