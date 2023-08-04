const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();
const port = 3000; // You can change this to your desired port

// Middleware
app.use(bodyParser.json());

// PostgreSQL connection setup
const client = new Client({
     user: 'postgres',
     host: 'localhost',
     database: 'LoanFund',
     password: 'student',
     port: 5432, // Default PostgreSQL port
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Error connecting to database', err));

// User registration endpoint
app.post('E:\Web Project\Frontend\Register\registration', async (req, res) => {
    const { id, firstname, lastname, email, password } = req.body;
    try {
        const query = 'INSERT INTO users(id, firstname, lastname, email, password) VALUES($1, $2, $3, $4, $5)';
        await client.query(query, [id, firstname, lastname, email, password]);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Registration failed' });
    }
});

// User login endpoint
app.post('E:\Web Project\Frontend\Login\login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const query = 'SELECT * FROM users WHERE id = $1 AND password = $2';
        const result = await client.query(query, [username, password]);
        if (result.rows.length === 1) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Login failed' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Login failed' });
    }
});

// Route for handling donations
app.post('E:\Web Project\Frontend\Donate\donate', async (req, res) => {
    try {
        const { amount, user_id, event_id, contact_number } = req.body;
        const client = await pool.connect();

        const query = 'INSERT INTO donations (amount, date, user_id, event_id,contact_number) VALUES ($1, CURRENT_DATE, $2, $3,$4) RETURNING id';
        const values = [amount, user_id, event_id,contact_number];

        const result = await client.query(query, values);
        const donationId = result.rows[0].id;

        client.release();

        res.json({ success: true, donationId });
    } catch (error) {
        console.error('Error during donation:', error);
        res.status(500).json({ success: false, error: 'Donation failed' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
