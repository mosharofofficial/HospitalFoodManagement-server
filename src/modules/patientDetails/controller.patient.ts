import {
  createPatientDB,
  deletePatientDB,
  getPatientDB,
  updatePatientDB,
} from "./patient.service";
import { PatientType } from "./patient.types";

export const createPatient = async (patientDetails: PatientType) => {
  try {
    const result = await createPatientDB(patientDetails);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getPatientById = async (id: string) => {
  try {
    const result = await getPatientDB(id);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updatePatientById = async (
  id: string,
  data: Partial<PatientType>
) => {
  try {
    const result = await updatePatientDB(id, data);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deletePatientById = async (id: string) => {
  try {
    const result = await deletePatientDB(id);
    return result;
  } catch (error) {
    console.log(error);
  }
};
