-- DROP TABLE IF EXISTS cocktails_alcIngredients;
DROP TABLE IF EXISTS user_favorites;
DROP TABLE IF EXISTS cocktails;
DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS ingredients;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(40) UNIQUE NOT NULL,
  password_digest VARCHAR(40) NOT NULL,
  prefName VARCHAR(40) NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON users (username);

CREATE TABLE cocktails (
    id SERIAL PRIMARY KEY,
    name VARCHAR(60) NOT NULL UNIQUE,
    fixings text NOT NULL,
    recipe text NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON cocktails (name, fixings);


CREATE TABLE user_favorites (
    users_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    cocktails_id INTEGER REFERENCES cocktails (id),
    PRIMARY KEY(users_id, cocktails_id)
);


-- CREATE TABLE ingredients (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(40)
-- );

-- CREATE INDEX ON ingredients (name);


-- CREATE TABLE cocktails_ingredients (
--   cocktails_id INTEGER REFERENCES cocktails (id) ON DELETE CASCADE,
--   ingredients_id INTEGER REFERENCES ingredients (id) ON DELETE CASCADE,
--   PRIMARY KEY(cocktails_id, ingredients_id)
-- );

-- 