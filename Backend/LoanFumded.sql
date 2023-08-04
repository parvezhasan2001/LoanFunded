CREATE TABLE users(
	id VARCHAR(10) PRIMARY KEY,
	firstname VARCHAR(20),
	lastname VARCHAR(20),
	Email VARCHAR(50),
	password VARCHAR(50)
);
-- Create the donations table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    target_amount NUMERIC NOT NULL,
    current_amount NUMERIC NOT NULL,
	user_id VARCHAR(10) REFERENCES users ("id")
);

-- Create the donations table
CREATE TABLE donations (
    id SERIAL PRIMARY KEY,
    amount NUMERIC NOT NULL,
    date DATE NOT NULL,
    user_id VARCHAR(10) REFERENCES users ("id"),
    event_id INTEGER REFERENCES events ("id")
);
