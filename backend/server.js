import express from 'express';

const app = express();

const DATABASE = {
    "randomTracks": [
        {
            trackName: "Demo Track1",
            trackId: "123456",
            trackLength: 180,
            description: "This is a demo track. It is not real. It is only a test.",
            jacket: "https://dummyimage.com/400x400/000/fff",
            links: ["https://www.example.com", "https://www.example2.com"],
        },
        {
            trackName: "Demo Track2",
            trackId: "123456",
            trackLength: 180,
            description: "This is a demo track. It is not real. It is only a test.",
            jacket: "https://dummyimage.com/400x400/000/fff",
            links: ["https://www.example.com", "https://www.example2.com"],
        },
        {
            trackName: "Demo Track3",
            trackId: "123456",
            trackLength: 180,
            description: "This is a demo track. It is not real. It is only a test.",
            jacket: "https://dummyimage.com/400x400/000/fff",
            links: ["https://www.example.com", "https://www.example2.com"],
        },
        {
            trackName: "Demo Track4",
            trackId: "123456",
            trackLength: 180,
            description: "This is a demo track. It is not real. It is only a test.",
            jacket: "https://dummyimage.com/400x400/000/fff",
            links: ["https://www.example.com", "https://www.example2.com"],
        },
    ]
};

app.get('/tracks/random', (req, res) => {
    const randomIdx = Math.floor(Math.random() * DATABASE.randomTracks.length);
    res.json(DATABASE.randomTracks[randomIdx]);
})

const port = process.env.PORT || 3033;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});