import { useEffect, useState } from "react";
import { getProductDetail } from "../../../services/product/api";

export const useTrendingData = (id: string, isEdit: boolean) => {
  const [productDetail, setProductDetail] = useState();

  const fetchTrending = async () => {
    try {
      const response = await getProductDetail(id);

      setProductDetail(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isEdit) {
      fetchTrending();
    }
  }, [isEdit]);

  return { productDetail };
};
