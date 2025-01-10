import { FoodChart } from "./foodChart.model";
import { FoodChartType } from "./foodChart.types";

export const createFoodChartDB = async (foodChart: FoodChartType) => {
  try {
    const result = await FoodChart.create(foodChart);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getFoodChartDB = async (id: string) => {
  try {
    const result = await FoodChart.findById(id);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updateFoodChartDB = async (id: string, update: Partial<FoodChartType>) => {
  try {
    const result = await FoodChart.findByIdAndUpdate(id, update, { new: true });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFoodChartDB = async (id: string) => {
  try {
    const result = await FoodChart.findByIdAndDelete(id, { new: true });
    return result;
  } catch (error) {
    console.log(error);
  }
};
