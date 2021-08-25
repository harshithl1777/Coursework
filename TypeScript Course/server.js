const express = require('express');
const app = express();

// GET Request
app.get('/', (req, res) => {  
    res.send('Hello World!');
});

// POST Request
app.post('/', (req, res) => {
    // get token from database
    const token = req.body.token;
    
});

// Start Server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});