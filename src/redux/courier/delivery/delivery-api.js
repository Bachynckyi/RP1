import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.delivery-auto.com/api/',
});

export const getCities = async () => {
    try {
      const result = await instance.get("/v4/Public/GetAreasList/fl_all=true");
      return result;
    } catch (error) {
      throw error;
    }
};

export const getWarehouses = async ({refLocalityDelivery}) => {
    try {
      const result = await instance.get(`v4/Public/GetWarehousesListByCity?CityId=${refLocalityDelivery}&DirectionType=1`);
      return result;
    } catch (error) {
      throw error;
    }
};