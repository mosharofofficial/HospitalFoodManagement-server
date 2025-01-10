import express, { Request, Response } from "express";

import {
  createFoodChart,
  deleteFoodChartById,
  getFoodChartById,
  updateFoodChartById,
} from "../foodCharts/foodchart.controller";

export const foodChartRoutes = express.Router();

foodChartRoutes.post("/create-foodChart", async (req: Request, res: Response) => {
  try {
    const foodChart = req.body;
    const result = await createFoodChart(foodChart);
    if (result?._id) {
      res.send({
        status: "success",
        message: "created FoodChart document",
        data: result,
      });
    } else {
      res.send({
        status: "error",
        message: "error while creating FoodChart document",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

foodChartRoutes.get("/get-foodChart/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await getFoodChartById(id);
    if (result?._id) {
      res.send({
        status: "success",
        message: "retrieved FoodChart document",
        data: result,
      });
    } else {
      res.send({
        status: "error",
        message: "error while retrieving FoodChart document",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

foodChartRoutes.put(
  "/update-foodChart/:id",
  async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const update = req.body;
      const result = await updateFoodChartById(id, update);
      if (result?._id) {
        res.send({
          status: "success",
          message: "updated FoodChart document",
          data: result,
        });
      } else {
        res.send({
          status: "error",
          message: "error while updating FoodChart document",
          data: result,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
);

foodChartRoutes.delete(
  "/delete-foodChart/:id",
  async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await deleteFoodChartById(id);
      if (result?._id) {
        res.send({
          status: "success",
          message: "deleted FoodChart document",
          data: result,
        });
      } else {
        res.send({
          status: "error",
          message: "error while deleting FoodChart document",
          data: result,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
);
