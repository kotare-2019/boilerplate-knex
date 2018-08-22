const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser,
  getUsers,
  addUser
}

function getUsers(testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser(id, testConn) {
  const conn = testConn || connection
  // return conn('users').join('profiles', 'users.id', 'profiles.user_id').where('users.id', id).select('users.id', 'users.name', 'profiles.url', 'profiles.profile_picture')
  return conn('users')
    .where('users.id', id)
    .join('profiles', 'users.id', 'profiles.user_id')
    .select('users.name', 'profiles.url', 'profiles.profile_picture')
    .first()
}

function addUser(newUser, redirector, testConn, ) {
  const conn = testConn || connection
  return conn('users')
    .returning('id')
    .insert({ name: newUser.name, email: newUser.email })
    .then((passedID) => {
      conn('profiles')
        .insert({
          user_id: passedID[0], url: newUser.url, profile_picture: newUser.profile_picture
        })
        .then(() => redirector())

    })
}

function deleteUser() {
  const conn = testConn || connection
  return conn('users')
    .returning('id')
    .del({ name: newUser.name, email: newUser.email })
    .then((passedID) => {
      conn('profiles')
        .del({
          user_id: passedID[0], url: newUser.url, profile_picture: newUser.profile_picture
        })
        .then(() => redirector())

    })
}
