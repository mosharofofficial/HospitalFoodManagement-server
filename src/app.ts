import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { patientRoutes } from "./modules/patientDetails/patient.routes";
dotenv.config();

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/patients", patientRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hospital Food Management server is running.");
});
