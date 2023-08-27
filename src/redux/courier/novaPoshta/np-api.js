import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.novaposhta.ua',
});

export const getAddress = async (locality) => {
    try {
       const data = {
        "apiKey": "0a4318678777f6e1341aba9b78c2f072",
        "modelName": "Address",
        "calledMethod": "getCities",
        "methodProperties": {
          "Page" : "1",
          "FindByString" : locality,
          "Limit" : "10000"
        }
      }
      const result = await instance.post("/v2.0/json/", data );
      return result;
    } catch (error) {
      throw error;
    }
};

export const getBranchNumber = async ({refLocality, branchNumber}) => {
  try {
    const data = {
      "apiKey": "0a4318678777f6e1341aba9b78c2f072",
      "modelName": "Address",
      "calledMethod": "getWarehouses",
      "methodProperties": {
        "CityRef" : refLocality,
        "Page" : "1",
        "Limit" : "10000",
        "Language" : "UA",
        // "WarehouseId" : branchNumber,
      }
   }
    const result = await instance.post("/v2.0/json/", data );
    return result;
  } catch (error) {
    throw error;
  }
};
  
