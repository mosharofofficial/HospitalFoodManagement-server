import express from 'express';

export const foodChartRoutes = express.Router();

foodChartRoutes.post("/create-patient", async (req: Request, res: Response) => {
  try {
    const patientDetails = req.body;
    const result = await createPatient(patientDetails);
    if (result?._id) {
      res.send({
        status: "success",
        message: "created patient document",
        data: result,
      });
    } else {
      res.send({
        status: "error",
        message: "error while creating patient document",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
});


foodChartRoutes.get("/get-patient/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await getPatientById(id);
    if (result?._id) {
      res.send({
        status: "success",
        message: "retrieved patient document",
        data: result,
      });
    } else {
      res.send({
        status: "error",
        message: "error while retrieving patient document",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
});


foodChartRoutes.put("/update-patient/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const update = req.body;
    const result = await updatePatientById(id, update);
    if (result?._id) {
      res.send({
        status: "success",
        message: "updated patient document",
        data: result,
      });
    } else {
      res.send({
        status: "error",
        message: "error while updating patient document",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
});


foodChartRoutes.delete("/delete-patient/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await deletePatientById(id);
    if (result?._id) {
      res.send({
        status: "success",
        message: "deleted patient document",
        data: result,
      });
    } else {
      res.send({
        status: "error",
        message: "error while deleting patient document",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
});


