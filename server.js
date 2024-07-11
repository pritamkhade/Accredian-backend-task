const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 5000
app.use(cors());
app.use(bodyParser.json());

// Create connection to MySQL
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Pritam@1999',
    database: 'referralDB'
});


// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL Connected...');
});


// Handle referral form submission
app.post('/api/referrals', (req, res) => {
    const { Name, Email, refereeName, refereeEmail } = req.body;

    if (!Name || !Email || !refereeName || !refereeEmail) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'INSERT INTO referrals (Name, Email, refereeName, refereeEmail) VALUES (?, ?, ?, ?)';
    const values = [Name, Email, refereeName, refereeEmail];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json({ message: 'Referral submitted successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
