import express from 'express';
import { StudentControllers } from './sudent.controller';

const router = express.Router();

//will call controller function

router.post('/create-student', StudentControllers.createStudent);

router.get('/', StudentControllers.getAllStudents);

router.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
