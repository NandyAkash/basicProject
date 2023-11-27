import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);

  return result;
};

const getAllStudntFromDB = async () => {
  const result = await StudentModel.find();

  return result;
};
const getSingleStudntFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });

  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudntFromDB,
  getSingleStudntFromDB,
};
