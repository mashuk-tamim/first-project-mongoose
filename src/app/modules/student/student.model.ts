import { Schema, model } from "mongoose";

import {
	Guardian,
	LocalGuardian,
	Student,
	StudentName,
} from "./student.interface";

// 2. Create a Schema corresponding to the document interface.
const studentNameSchema = new Schema<StudentName>({
	firstName: { type: String, required: true },
	middleName: { type: String },
	lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
	fatherName: { type: String, required: true },
	fatherContactNumber: { type: String, required: true },
	fatherOccupation: { type: String, required: true },
	motherName: { type: String, required: true },
	motherContactNumber: { type: String, required: true },
	motherOccupation: { type: String, required: true },
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
	localGuardianName: { type: String, required: true },
	localGuardianContactNumber: { type: String, required: true },
	localGuardianOccupation: { type: String, required: true },
	localGuardianAddress: { type: String, required: true },
});

export const studentSchema = new Schema<Student>({
	id: String,
	name: studentNameSchema,
	email: { type: String, required: true },
	gender: ["male", "female"],
	dateOfBirth: String,
	contactNumber: { type: String, required: true },
	emergencyContactNumber: { type: String, required: true },
	bloodGroup: ["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"],
	presentAddress: { type: String, required: true },
	permanentAddress: { type: String, required: true },
	guardian: guardianSchema,
	localGuardian: LocalGuardianSchema,
	profileImg: String,
	isActive: ["active", "inactive"],
});


export const StudentModel = model<Student>("Student", studentSchema);