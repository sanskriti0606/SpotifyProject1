import express from 'express';
import { Song, validateSong } from '../models/song.js'; // Adjust path as needed
import auth from '../middleware/auth.js'; // Ensure this path is correct

const router = express.Router();

// POST: Create a new song
router.post('/', auth, async (req, res) => {
  const { error } = validateSong(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  try {
    const song = new Song(req.body);
    await song.save();
    res.status(201).send({ data: song, message: 'Song created successfully' });
  } catch (err) {
    console.error('Error creating song:', err.message);
    res.status(500).send({ message: 'Internal Server Error', details: err.message });
  }
});

// GET: Fetch all songs
router.get('/', async (req, res) => {
  try {
    const songs = await Song.find(); // Fetch all songs
    res.status(200).send({ data: songs });
  } catch (err) {
    console.error('Error fetching songs:', err.message);
    res.status(500).send({ message: 'Internal Server Error', details: err.message });
  }
});

export default router;
