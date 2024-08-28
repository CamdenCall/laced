const mysql = require('mysql2/promise');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const mysqlStore = require('express-mysql-session')(session);
const cookieParser = require("cookie-parser");
const expressip = require('express-ip');

const options ={
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'laced',
    host: 'localhost',
    port: '3306',
    createDatabaseTable: true
}
const  sessionStore = new mysqlStore(options);

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'laced'
});

const app = express();
app.use(express.json());
app.use(cookieParser())
app.set('trust proxy', true)
app.use(expressip().getIpInfoMiddleware);
app.use(session({
    name: "laced_session",
    secret: 'test',
    store: sessionStore,
    saveUninitialized: false,
    resave: false,
    cookie: { sameSite: false, maxAge: 604800000, secure: false, httpOnly: true},
}));
app.use(cors({
    origin: ['http://localhost:3000', 'https://4ce4-73-20-90-23.ngrok-free.app'],
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));



app.get('/auth', async (req, res) => {
    if (req.session.user) {
        try {
            const query = 'SELECT * FROM user WHERE email = ?';
            
            const [results, fields] = await pool.query(query, [req.session.user.email]);
            
            if (results.length > 0) {
                console.log('Row data:', results[0]);
                res.status(200).json({ session: req.session, authenticated: true, userData: results[0] });
            } else {
                console.log('No data found with the given email.');
                res.status(200).json({ authenticated: false, message: 'No data found' });
            }
        } catch (error) {
            console.error('Error fetching data:', error.stack);
            res.status(500).json({ error: error.stack });
        }
    } else {
        res.status(200).json({ authenticated: false });
    }
});
app.post('/link', async (req, res) => {
    const linkName = req.body.linkName;
    try {
        const query = 'SELECT * FROM user WHERE link = ?';
        
        const [results, fields] = await pool.query(query, [linkName]);
        if (results.length > 0) {
            const biolink = JSON.parse(results[0].biolink);
            console.log(biolink);
            biolink.views += 1;
            const updatedBiolink = JSON.stringify(biolink);

            await pool.query('UPDATE user SET biolink = ? WHERE link = ?', [updatedBiolink, linkName]);
            res.status(200).json({ linkData: results[0].biolink });
        } else {
            res.status(200).json({ message: 'Link Not Found' });
        }
    } catch (error) {
        console.error('Error fetching data:', error.stack);
        res.status(500).json({ error: error.stack });
    }
});


app.post('/sign-in', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await pool.query('SELECT password FROM user WHERE email = ?', [email]);
        if (rows.length === 0) {
            return res.status(401).send({ message: 'User not found' });
        }
        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ message: 'Invalid Credentials' });
        }
        req.session.user = { email };
        res.status(201).send(req.session.id)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Server Error' });
    }
});

app.post('/sign-up', async (req, res) => {
    const { email, password, link } = req.body;
    try {
        const [checkEmail] = await pool.query('SELECT COUNT(*) AS count FROM user WHERE email = ?', [email]);
        const [checkLink] = await pool.query('SELECT COUNT(*) AS count FROM user WHERE link = ?', [link]);
        if (checkEmail[0].count !== 0) {
            return res.status(400).send({ message: 'Email Already Registered' });
        } else if (checkLink[0].count !== 0) {
            return res.status(400).send({ message: 'Link Name Already Exists' });
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const biolink = { "spotify": false };
            await pool.query("INSERT INTO user (email, password, link, biolink) VALUES (?, ?, ?, ?)", [email, hashedPassword, link, JSON.stringify(biolink)]);
            res.status(201).send({ message: 'User registered successfully' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Server Error' });
    }
});
app.post('/user', async (req, res) => {
    const { email } = req.body;
    const query = 'SELECT * FROM user WHERE id = ?';  // Replace 'yourtable' with your table name and 'id' with your column name
  
    pool.query(query, [email], (error, results, fields) => {
      if (error) {
        return res.status(400).send({message: 'Error fetching data'});
      }
      if (results.length > 0) {
        console.log('Row data:', results[0]);
      } else {
        console.log('No data found with the given ID.');
      }
    });
});

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
