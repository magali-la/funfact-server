// DEPENDENCIES
const express = require("express");
const app = express();

// axios to handle API requests
const axios = require("axios");

// ROUTES - Induces
// Index - get the fun fact of the day by setting up rout with axios get request
app.get('/api/fun-fact', async (req, res) => {
    try {
        // fetch with an axios get request
        const response = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");

        // check which fact was sent at this path on the server
        console.log(response.data.text);

        // get the parsed data, but only the text field with the fact as that's all they want and in a different format
        res.json({ fact: response.data.text });
    } catch (error) {
        // give request code if an error happened
        if (error.response) {
            console.error('API error: ', error.response.status, error.response.data);

            res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
        } else {
            // request error, network error
            console.error('Network Error:', error.message);
            res.status(500).json({ message: 'A network error occurred.' });
        }
    }
});

// LISTENER - PORT
app.listen(3001, () => {
    console.log('listening on port:' + 3001);
});