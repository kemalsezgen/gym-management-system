import mongoose from "mongoose";
import slugify from "slugify";

const Schema = mongoose.Schema;

const RoutineSchema = Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    message: {
        type: String,
        unique: true,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    }
});

const RoutineMessage = mongoose.model('RoutineMessage', RoutineSchema);
export default RoutineMessage;