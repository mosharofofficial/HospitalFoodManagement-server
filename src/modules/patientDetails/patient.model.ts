import mongoose, { model, Schema } from "mongoose";
import { EmergencyContactType, PatientType } from "./patient.types";

const emergencyContactSchema = new Schema<EmergencyContactType>({
  name: { type: String, required: true },
  relationship: { type: String, required: true },
  contactNumber: { type: String, required: true, unique: true },
});

const patientSchema = new Schema<PatientType>(
  {
    name: { type: String, required: true },
    diseases: [{ type: String, required: true }],
    allergies: [{ type: String, required: true }],
    roomNumber: { type: String, required: true },
    bedNumber: { type: String, required: true, unique: true },
    floorNumber: { type: String, required: true },
    age: {
      type: Number,
      required: true,
      min: [0, "{VALUE} is invalid. enter a valid age"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    contactInformation: {
      phoneNumber: { type: String, required: true, unique: true },
      email: { type: String, required: false, unique: true },
    },
    emergencyContact: emergencyContactSchema,
  },
  { timestamps: true }
);

export const Patient = model<PatientType>("Patient", patientSchema);
