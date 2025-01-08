import { Patient } from "./patient.model";
import { PatientType } from "./patient.types";

export const createPatientDB = async (patientDetails: PatientType) => {
  try {
    const result = await Patient.create(patientDetails);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getPatientDB = async (id: string) => {
  try {
    const result = await Patient.findById(id);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updatePatientDB = async (
  id: string,
  update: Partial<PatientType>
) => {
  try {
    const result = await Patient.findByIdAndUpdate(id, update, {
      new: true,
      upsert: false,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deletePatientDB = async (id: string) => {
  try {
    const result = await Patient.findByIdAndDelete(id);
    return result;
  } catch (error) {
    console.log(error);
  }
};
