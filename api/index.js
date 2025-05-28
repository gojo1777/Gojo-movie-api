const express = require('express');
const app = express();
const movies = [
  {
    id: 1,
    title: "කැරලි පොත",
    year: 2023,
    sinSubUrl: "https://example.com/subtitles/karali-potha.srt",
    videoUrl: "https://example.com/videos/karali-potha.mp4"
  },
  {
    id: 2,
    title: "ගඟ මැද",
    year: 2022,
    sinSubUrl: "https://example.com/subtitles/ganga-meda.srt",
    videoUrl: "https://example.com/videos/ganga-meda.mp4"
  }
];

app.get('/', (req, res) => {
  res.send('🎬 Welcome to GoJO Movie API Clone 🎥');
});

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  const movie = movies.find(m => m.id === movieId);
  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }
  res.json(movie);
});

module.exports = app;
