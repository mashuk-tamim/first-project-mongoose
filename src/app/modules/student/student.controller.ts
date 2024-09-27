import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
	try {
		const { student: studentData } = req.body;
		const result = await StudentServices.createStudentIntoDB(studentData);

		res.status(200).json({
			success: true,
			message: "Student created successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: "Something went wrong",
			error,
		});
	}
};

const getAllStudent = async (req: Request, res: Response) => {
	try {
		const result = await StudentServices.getAllStudentsFromDB();

		res.status(200).json({
			success: true,
			message: "Students are retrieved successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: "Something went wrong",
			error,
		});
	}
};

const getSingleStudent = async (req: Request, res: Response) => {
	try {
		const { studentId } = req.params;
		const result = await StudentServices.getSingleStudentFromDB(studentId);

		res.status(200).json({
			success: true,
			message: "Student is retrieved successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: "Something went wrong",
			error
		});
	}
};

export const StudentControllers = {
	createStudent,
  getAllStudent,
  getSingleStudent,
};
