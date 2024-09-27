import { Schema, model } from "mongoose";

import {
	Guardian,
	LocalGuardian,
	Student,
	StudentName,
} from "./student.interface";

const studentNameSchema = new Schema<StudentName>({
	firstName: {
		type: String,
		required: [true, "First name is required"],
		trim: true,
		minLength: [2, "First name must be at least 2 characters"],
		maxLength: [30, "First name must be less than or equal to 30 characters"],
		validate: {
			validator: function (value: string) {
				const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
				return firstNameStr === value;
			},
			message: "{VALUE} is not in capitalized format",
		},
	},
	middleName: {
		type: String,
		trim: true,
		minLength: [2, "Middle name must be at least 2 characters"],
		maxLength: [30, "Middle name must be less than or equal to 30 characters"],
		validate: {
			validator: function (value: string) {
				const middleNameStr = value.charAt(0).toUpperCase() + value.slice(1);
				return middleNameStr === value;
			},
			message: "{VALUE} is not in capitalized format",
		},
	},
	lastName: {
		type: String,
		required: [true, "Last name is required"],
		trim: true,
		minLength: [2, "Last name must be at least 2 characters"],
		maxLength: [30, "Last name must be less than or equal to 30 characters"],
		validate: {
			validator: function (value: string) {
				const lastNameStr = value.charAt(0).toUpperCase() + value.slice(1);
				return lastNameStr === value;
			},
			message: "{VALUE} is not in capitalized format",
		},
	},
});

const guardianSchema = new Schema<Guardian>({
	fatherName: {
		type: String,
		required: [true, "Father's name is required"],
		trim: true,
		minLength: [2, "Father's name must be at least 2 characters"],
		maxLength: [
			30,
			"Father's name must be less than or equal to 30 characters",
		],
		validate: {
			validator: function (value: string) {
				const fatherNameStr = value.charAt(0).toUpperCase() + value.slice(1);
				return fatherNameStr === value;
			},
			message: "{VALUE} is not in capitalized format",
		},
	},
	motherName: {
		type: String,
		required: [true, "Mother's name is required"],
		trim: true,
		minLength: [2, "Mother's name must be at least 2 characters"],
		maxLength: [
			30,
			"Mother's name must be less than or equal to 30 characters",
		],
		validate: {
			validator: function (value: string) {
				const motherNameStr = value.charAt(0).toUpperCase() + value.slice(1);
				return motherNameStr === value;
			},
			message: "{VALUE} is not in capitalized format",
		},
	},
	fatherContactNumber: {
		type: String,
		required: [true, "Father's contact number is required"],
	},
	fatherOccupation: {
		type: String,
		required: [true, "Father's occupation is required"],
	},
	motherContactNumber: {
		type: String,
		required: [true, "Mother's contact number is required"],
	},
	motherOccupation: {
		type: String,
		required: [true, "Mother's occupation is required"],
	},
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
	localGuardianName: {
		type: String,
		required: [true, "Local guardian's name is required"],
		trim: true,
		minLength: [2, "Local guardian's name must be at least 2 characters"],
		maxLength: [
			30,
			"Local guardian's name must be less than or equal to 30 characters",
		],
		validate: {
			validator: function (value: string) {
				const localGuardianNameStr =
					value.charAt(0).toUpperCase() + value.slice(1);
				return localGuardianNameStr === value;
			},
			message: "{VALUE} is not in capitalized format",
		},
	},
	localGuardianContactNumber: {
		type: String,
		required: [true, "Local guardian's contact number is required"],
	},
	localGuardianOccupation: {
		type: String,
		required: [true, "Local guardian's occupation is required"],
	},
	localGuardianAddress: {
		type: String,
		required: [true, "Local guardian's address is required"],
	},
});

export const studentSchema = new Schema<Student>({
	id: {
		type: String,
		required: [true, "ID is required"],
		unique: true,
		maxLength: [6, "ID must be less than or equal to 6 characters"],
	},
	name: {
		type: studentNameSchema,
		required: [true, "Student name is required"],
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true,
		trim: true,
	},
	gender: {
		type: String,
		enum: {
			values: ["male", "female"],
			message:
				"{VALUE} is not supported. Only 'male' and 'female' are supported.",
		},
	},
	dateOfBirth: {
		type: String,
		trim: true,
		required: [true, "Date of birth is required"],
	},
	contactNumber: {
		type: String,
		trim: true,
		required: [true, "Contact number is required"],
	},
	emergencyContactNumber: {
		type: String,
		trim: true,
		required: [true, "Emergency contact number is required"],
	},
	bloodGroup: {
		type: String,
		enum: {
			values: ["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"],
			message: "{VALUE} is not a valid blood group",
		},
		required: [true, "Blood group is required"],
	},
	presentAddress: {
		type: String,
		trim: true,
		required: [true, "Present address is required"],
	},
	permanentAddress: {
		type: String,
		trim: true,
		required: [true, "Permanent address is required"],
	},
	guardian: {
		type: guardianSchema,
		required: [true, "Guardian information is required"],
	},
	localGuardian: {
		type: LocalGuardianSchema,
		required: [true, "Local guardian information is required"],
	},
	profileImg: {
		type: String,
		trim: true,
		default: "https://default.profile/img.png",
	},
	isActive: { type: String, enum: ["active", "inactive"], default: "active" },
});

export const StudentModel = model<Student>("Student", studentSchema);
