import mongoose, { model, Schema } from "mongoose";
import { FoodChartType, MealPlanType } from "./foodChart.types";

const mealPlanSchema = new Schema<MealPlanType>({
  time: {
    type: String,
    enum: ["Morning", "Evening", "Night"],
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
});

const foodChartSchema = new Schema<FoodChartType>(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    meals: {
      type: [mealPlanSchema],
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);


export const FoodChart = model<FoodChartType>("FoodChart", foodChartSchema);