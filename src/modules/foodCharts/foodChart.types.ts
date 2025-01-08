import mongoose from "mongoose";

export interface MealPlanType {
  time: "Morning" | "Evening" | "Night";
  ingredients: string[];
  instructions: string;
}

export interface FoodChartType {
  patientId: mongoose.Types.ObjectId; 
  meals: MealPlanType[];
}
