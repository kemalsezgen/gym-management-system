import express from "express";

import {getRoutines, createRoutine, deleteRoutine} from "../controllers/routines.js"

const router = express.Router();

router.get('/', getRoutines);
router.post('/', createRoutine);

export default router;