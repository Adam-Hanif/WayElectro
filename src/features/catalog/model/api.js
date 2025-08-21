import axios from "axios";

export const fetchProductsGet = async () => {
  const { data } = await axios.get(
    "https://way-electro-server.onrender.com/catalog"
  );

  return data;
};
export const fetchAllProductsGet = async () => {
  const { data } = await axios.get(
    "https://way-electro-server.onrender.com/get_circuit_breakers_list"
  );

  return data;
};

export const fetchAllBrandsGet = async (id) => {
  const { data } = await axios.get(
    `https://way-electro-server.onrender.com/circuit_breakers_brands/${id}`
  );

  return data;
};
