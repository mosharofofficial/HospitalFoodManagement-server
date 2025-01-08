import { createFoodChartDB, deleteFoodChartDB, getFoodChartDB, updateFoodChartDB } from "./foodChart.service";
import { FoodChartType } from "./foodChart.types";


export const createFoodChart = async (foodChart:FoodChartType) => {
    try {
        const result = await createFoodChartDB(foodChart);
        return result;
    } catch (error) {
        console.log(error)
    }
}

export const getFoodChartById = async (id:string) => {
    try {
        const result = await getFoodChartDB(id);
        return result;
    } catch (error) {
        console.log(error)
    }
}

export const updateFoodChartById = async (id:string, update:Partial<FoodChartType>) => {
    try {
        const result = await updateFoodChartDB(id, update);
        return result;
    } catch (error) {
        console.log(error)
    }
}

export const deleteFoodChartById = async (id:string) => {
    try {
        const result = await deleteFoodChartDB(id);
        return result;
    } catch (error) {
        console.log(error)
    }
}