import RoutineMessage from "../models/Routine.js";

export const getRoutines = async (req, res) => {
    try {
        const routines = await RoutineMessage.find();

        console.log(routines);
        res.status(200).json(routines);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export const createRoutine = async (req, res) => {
    try {
        const newRoutine = await RoutineMessage.create({
            title: req.body.title,
            message: req.body.message,
        });
        res.status(201).json(newRoutine);

    } catch(error){
        res.status(409).json({ message: error.message });
    }
}
/*
export const deleteRoutine = async (req, res, id) => {
    try {
        const deletedRoutine = await RoutineMessage.findByIdAndDelete(id)
    } catch (error) {
        
    }
}
*/