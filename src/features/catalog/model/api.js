import axios from "axios";

export const fetchProductsGet = async () => {
  const { data } = await axios.get(
    "https://way-electro-server.onrender.com/catalog"
  );
  return data;
};
