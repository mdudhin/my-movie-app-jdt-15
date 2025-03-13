import axiosWithConfig from "../api";

export const postProduct = async (payload: any) => {
  try {
    const response = await axiosWithConfig.post("products/add", payload);
    return response.data;
  } catch (error) {}
};

export const putProduct = async (payload: any) => {
  try {
    const response = await axiosWithConfig.put(
      `products/${payload.id}`,
      payload
    );
    return response.data;
  } catch (error) {}
};

export const deleteProduct = async (id: string | number) => {
  try {
    const response = await axiosWithConfig.delete(
      `http://localhost:5174/products/${id}`
    );
    return response.data;
  } catch (error) {}
};

export const getProductDetail = async (id: string | number) => {
  try {
    const response = await axiosWithConfig.get(`products/${id}`);

    return response.data;
  } catch (error) {}
};
