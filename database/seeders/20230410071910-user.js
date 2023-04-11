'use strict'

module.exports = {
  up: (models, mongoose) => {
    return models.User.bulkWrite([
      {
        insertOne: {
          document: {
            name: 'user1',
            email: 'user1@example.com',
            password: 12345678
          }
        }
      },
      {
        insertOne: {
          document: {
            name: 'user2',
            email: 'user2@example.com',
            password: 12345678
          }
        }
      }
    ])
      .then(res => {
        // Prints "1"
        console.log(res.insertedCount)
      })
  },

  down: (models, mongoose) => {
    return models.User.bulkWrite([
      {
        deleteOne: {
          filter: {
            name: 'user1'
          }
        }
      },
      {
        deleteOne: {
          filter: {
            name: 'user2'
          }
        }
      }
    ]).then(res => {
      // Prints "1"
      console.log(res.deletedCount)
    })
  }
}
