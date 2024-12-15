const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Import CORS
const app = express();
const port = 3001;

// Enable CORS for all routes (this will allow requests from any origin)
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Load data from jokes_data.json
let data = require('./jokes_data.json');

// API to get all categories
app.get('/categories', (req, res) => {
    res.json(data.categories);
});

// API to get all jokes
app.get('/jokes', (req, res) => {
    res.json(data.jokes);
});

// API to get jokes based on category
app.get('/jokes/category/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const jokesByCategory = data.jokes.filter(joke => joke.categoryId === categoryId);
    if (jokesByCategory.length > 0) {
        res.json(jokesByCategory);
    } else {
        res.status(404).json({ message: "No jokes found for the specified category." });
    }
});

// API to add a joke to a particular category
app.post('/jokes', (req, res) => {
    const { setup, punchline, categoryId } = req.body;

    if (!setup || !punchline || !categoryId) {
        return res.status(400).json({ message: "Missing required fields: setup, punchline, or categoryId." });
    }

    const newJokeId = data.jokes.length ? data.jokes[data.jokes.length - 1].jokeId + 1 : 1;
    const newJoke = {
        jokeId: newJokeId,
        setup,
        punchline,
        categoryId,
        img: "https://random-image-pepebigotes.vercel.app/api/random-image" 
    };

    data.jokes.push(newJoke);

    // Save to file
    fs.writeFileSync('./jokes_data.json', JSON.stringify(data, null, 2));

    res.status(201).json(newJoke);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
