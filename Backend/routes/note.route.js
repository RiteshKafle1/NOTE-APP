const express=require('express');
const noteRouter=express.Router();

const { createNote,editNote, allNotes,userNotes,deleteNotes,updateIsPinned } = require('../controllers/note.controller');

const authUser=require('../middlewares/user.auth');

noteRouter.post('/add-note',authUser,createNote);
noteRouter.put('/edit-note/:noteId',authUser,editNote);
noteRouter.put('/ispinned/:noteId',authUser,updateIsPinned);
noteRouter.get('/fetch-note',allNotes);
noteRouter.get('/fetch/user-notes',authUser,userNotes);
noteRouter.delete('/delete-notes/:noteId',authUser,deleteNotes);

module.exports=noteRouter;