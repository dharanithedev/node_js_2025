import express from 'express';
import { ControllerDelete, ControllerGet, ControllerPost, ControllerPut } from '../controller/app.controller.js';

const router = express.Router();

// R - To Read
router.get('/', ControllerGet)

// C - To Create
router.post('/', ControllerPost);

// U - To Update
router.put('/:id', ControllerPut);

// D - To Delete
router.delete('/:id', ControllerDelete);

export default router;