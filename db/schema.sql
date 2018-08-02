-- DROP TABLE IF EXISTS cocktails_alcIngredients;
DROP TABLE IF EXISTS users_cocktails;
DROP TABLE IF EXISTS cocktails;
DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS ingredients;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(40) UNIQUE NOT NULL,
  password_digest VARCHAR(40) NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON users (username);

CREATE TABLE cocktails (
    id SERIAL PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    fixings text NOT NULL,
    recipe text NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

-- CREATE INDEX ON cocktails (name, fixings);

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

-- CREATE TABLE users_cocktails (
--   cocktails_id INTEGER REFERENCES cocktails (id) ON DELETE CASCADE,
--   users_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
--   PRIMARY KEY(cocktails_id, users_id)
-- );