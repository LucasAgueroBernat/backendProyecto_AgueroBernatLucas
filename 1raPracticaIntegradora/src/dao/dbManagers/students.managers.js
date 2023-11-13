import { studentsModel } from '../dbManagers/models/students.models.js';

export default class Students {
    constructor() {
        console.log('Working students with DB');
    }

    getAllUsers = async () => {
        //MongoDB el formato de nuestros rejistros son BSON
        const students = await studentsModel.find();
        //BSON -> POJO (Plain Old Javascript Object)
        return students.map(student => student.toObject());
    }

    save = async (student) => {
        const result = await studentsModel.create(student);
        return result;
    }
}