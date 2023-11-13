import mongoose from 'mongoose';

const studentsCollection = 'students';

const studentsSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dni: Number,
    birt_date: date,
    gender: {
        tipe: String,
        enum: ['M','F']
    },
    courses: {
        type: array,
        default: []
    }
});


export const studentsModel = mongoose.model(StudentsCollection, studentsSchema);