// 1. Create an interface representing a document in MongoDB.

export interface Guardian {
	fatherName: string;
	fatherContactNumber: string;
	fatherOccupation: string;
	motherName: string;
	motherContactNumber: string;
	motherOccupation: string;
}

export interface StudentName {
	firstName: string;
	middleName?: string;
	lastName: string;
}

export interface LocalGuardian {
	localGuardianName: string;
	localGuardianContactNumber: string;
	localGuardianOccupation: string;
	localGuardianAddress: string;
}

export interface Student {
  id: string;
  name: StudentName;
	email: string;
	gender: "male" | "female";
	dateOfBirth: string;
	contactNumber: string;
	emergencyContactNumber: string;
	bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB-" | "AB+";
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian,
  profileImg?: string;
  isActive: "active" | "inactive"
}
