const bcrypt = require('bcryptjs');
const db = require('../config/connection');


//Register/create a user account by allowing the user to add a username and password to the users table.
//For AUTH: bcrypt & hash 
function createUser(username, password, preferredName) {
    return bcrypt.hash(password, 8)
      .then((hash) => {
        return db.one(`
          INSERT INTO users (username, password_digest, preferredName)
          VALUES ($/username/, $/password_digest/, $/preferredName/)
          RETURNING *
        `, {
          username,
          password_digest: hash,
          preferredName,
        });
      });
  }

  //Find a user by their username
  function findById(id) {
    return db.one(`
      SELECT *
      FROM users
      WHERE id = $1
    `, id);
  }

  //After findByUsername (), Confirm login information and 'log in' the user.
  //AUTH: bcrypt & compare password to user.password
  async function register(username, password) {
    try {
      const user = await findByUsername(username);
      const res = await bcrypt.compare(password, user.password_digest);
      if (!res) {
        throw new Error('Incorrect entry. Please try again.')
      }
      delete user.password_digest;
      return user;
    } catch (err) {
      throw new Error('Unauthorized');
    }
  }

//If user is logged in- allow them to change their preferredName.
  function updatePrefName(preferredName){
      return db.one(`
        UPDATE users
        SET preferredName = $/preferredName/
        WHERE 
      `)
  }

//Export all functions
  module.exports = {
      createUser,
      findById,
      register,
      updatePrefName
  };