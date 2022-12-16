import * as api from '../api';

// Action Creators
export const getRoutines = () => async (dispatch) => {

    try {
        const { data } = await api.fetchRoutines();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createRoutine = (routine) => async (dispatch) => {
    try {
        const { data } = await api.createRoutine(routine);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}