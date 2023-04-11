const express = require('express')
const router = express.Router()
const { User } = require('../database/models')

router.get('/', async (req, res) => {
  const users = await User.find().lean()
  users.forEach(user => {
    delete user.password
  })

  res.json({
    users
  })
})

module.exports = router
