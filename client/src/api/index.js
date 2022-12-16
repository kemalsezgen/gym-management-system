import axios from "axios";

const url = "http://localhost:5000/routines";

export const fetchRoutines = () => axios.get(url);
export const createRoutine = (newPost) => axios.post(url, newPost);