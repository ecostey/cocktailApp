
DROP TABLE IF EXISTS cocktails;

CREATE TABLE cocktails (
    id SERIAL PRIMARY KEY,
    name VARCHAR(60) NOT NULL UNIQUE,
    fixings text NOT NULL,
    recipe text NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);
