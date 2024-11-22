// загрузка данных о машинах

import { FiltersProps } from "@/types";

export const fetchCars = async (filters: FiltersProps) => {
    const { manufacturer, limit, year, fuel, model } = filters;

    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${manufacturer}&year=${year}&limit=${limit}&type_fuel=${fuel}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4f1e11de17msh9fae659a33b7c93p1a17e2jsn1ece7d2f8cbf',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}


