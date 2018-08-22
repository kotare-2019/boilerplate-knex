const express = require('express')

const db = require('../db')

const router = express.Router()

// root route
router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', { users: users })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// add a new user
router.get('/add', (req, res) => {
  res.render('add-user')
})

router.post('/add', (req, res) => {
  const newUser = ({
    name: req.body.name,
    email: req.body.email,
    url: req.body.url,
    profile_picture: req.body.profile_picture
  })
  function redirector () {
    res.redirect('/')
  }
  db.addUser(newUser, redirector)
})

// profile route
router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getUser(id)
  .then(profile => {
    console.log(profile)
    res.render('profile', profile)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router

