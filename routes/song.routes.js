import { Router } from 'express';
import { createNewSong, getAllSongs, getSongByTitle, updateSong, deleteSong } from '../controllers/song.controller.js';

const songRouter = Router();

songRouter.route('/songs')
    .get(getAllSongs)

songRouter.route('/songs')
    .post(createNewSong)

songRouter.route('/songs/:title')
    .get(getSongByTitle)
    .delete(deleteSong)
    .patch(updateSong)
  

    export default songRouter