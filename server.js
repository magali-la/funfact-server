// Dependencies
const express = require("express");
const app = express();

// Routes - Induces
// Index
app.get('/', (req, res) => {
    res.send('test');
})

// Listener - Port
app.listen(3001, () => {
    console.log('listening on port:' + 3001);
});