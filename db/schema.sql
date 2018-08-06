DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS users_cocktails;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cocktails;


CREATE TABLE cocktails (
    id SERIAL PRIMARY KEY,
    name VARCHAR(60) NOT NULL UNIQUE,
    fixings text NOT NULL,
    recipe text NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON cocktails (name, fixings);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(40) UNIQUE NOT NULL,
  password_digest VARCHAR(40) NOT NULL,
  prefName VARCHAR(40) NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON users (username);

-- CREATE TABLE users_cocktails (
--     PRIMARY KEY(users_id, cocktails_id) ON DELETE CASCADE,
--     users_id INTEGER REFERENCES users (id),
--     cocktails_id INTEGER REFERENCES cocktails (id)
-- );

-- CREATE TABLE favorites (
--     id SERIAL PRIMARY KEY,
--     users_cocktails_id INTEGER REFERENCES users_cocktails (id),
--     users_id INTEGER REFERENCES users (id),
--     cocktails_id INTEGER REFERENCES cocktails (id),
--     name REFERENCES cocktails (name),
--     fixings REFERENCES cocktails (fixings),
--     recipe REFERENCES cocktails (recipe),
--     date_created REFERENCES cocktails (date_created)
-- );