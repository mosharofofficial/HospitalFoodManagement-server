
export interface EmergencyContactType {
  name: string;
  relationship: string;
  contactNumber: string;
}

export interface PatientType {
  name: string;
  diseases: string[];
  allergies: string[];
  roomNumber: string;
  bedNumber: string;
  floorNumber: string;
  age: number;
  gender: "male" | "female" | "other";
  contactInformation: {
    phoneNumber: string;
    email?: string;
  };
  emergencyContact: EmergencyContactType;
}
