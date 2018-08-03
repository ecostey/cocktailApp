const bcrypt = require('bcryptjs');
const db = require('../config/connection');


//Register/create a user account by allowing the user to add a username and password to the users table.
//For AUTH: bcrypt & hash 
function register(username, password) {
    return bcrypt.hash(password, 8)
      .then((hash) => {
        return db.one(`
          INSERT INTO users (username, password_digest, nickname)
          VALUES ($/username/, $/password_digest/, $/nickname/)
          RETURNING *
        `, {
          username,
          password_digest: hash,
        });
      });
  }

  //Find a user by their username
  function findByUsername(username) {
    return db.one(`
      SELECT *
      FROM users
      WHERE username = $1
    `, username);
  }

  //After findByUsername (), Confirm login information and 'log in' the user.
  //AUTH: bcrypt & compare password to user.password
  async function login(username, password) {
    try {
      const user = await findByUsername(username);
      const res = await bcrypt.compare(password, user.password_digest);
      if (!res) {
        throw new Error('bad password')
      }
      delete user.password_digest;
      return user;
    } catch (err) {
      throw new Error('Unauthorized');
    }
  }

//If user is logged in- allow them to change their nickname.
  function updateNickname(nickname){
      return db.one(`
        UPDATE users
        SET nickname = $/nickname/
        WHERE 
      `)
  }


  module.exports = {
      register,
      findByUsername,
      login
  };