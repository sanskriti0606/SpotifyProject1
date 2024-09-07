import mongoose from 'mongoose';
import Joi from 'joi';

const playListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true }, // Add artist field
  song: { type: String, required: true },   // Add song URL field
  image: { type: String },                  // Add image URL field
  duration: { type: String },               // Add duration field
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const PlayList = mongoose.model('PlayList', playListSchema);
const validatePlayList = (playList) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    artist: Joi.string().required(), // Add artist field
    song: Joi.string().uri().required(), // Validate URL to the song
    image: Joi.string().uri().optional(), // Optional image URL
    duration: Joi.string().pattern(/^(\d+):(\d+)$|^(\d+)$|^(\d+):(\d+):(\d+)$|^(\d+):(\d+):(\d+):(\d+)$|^(\d+)s$/).optional(), // Validate duration in various formats
    user: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required() // Validate ObjectId string
  });
  return schema.validate(playList);
};

export { PlayList, validatePlayList };
