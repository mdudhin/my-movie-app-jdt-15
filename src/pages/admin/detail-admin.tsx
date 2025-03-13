import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "../../component/input-field/input-field";
import { postProduct, putProduct } from "../../services/product";
import { useNavigate } from "react-router";
import { useQuery } from "../../hooks/useQuery";
import { useTrendingData } from "./hooks/useProductDetail";

type FormValues = {
  title: string;
  description: string;
};

const DetailAdmin: React.FC = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const id = query.get("id") as string;
  const isEdit = !!id;
  console.log({ isEdit });

  const { productDetail } = useTrendingData(id, isEdit);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (productDetail) {
      setValue("title", productDetail.title || "");
      setValue("description", productDetail.description || "");
    }
  }, [productDetail, setValue]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      (await isEdit) ? putProduct({ ...data, id }) : postProduct(data);
      navigate("/admin");
    } catch (error) {
      console.error("Error posting product:", error);
    }
  };

  return (
    <div className="flex flex-col p-20">
      <h1 className="text-3xl font-semibold">
        {id ? "Edit Product" : "Create Product"}
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-1.5"
      >
        {/* Title Input */}
        <label htmlFor="title">Title</label>
        <InputField
          type="text"
          id="title"
          {...register("title", { required: "Title is required" })}
          className="w-full"
        />
        {errors.title && (
          <span className="text-red-500">{errors.title.message}</span>
        )}

        {/* Description Input */}
        <label htmlFor="description">Description</label>
        <InputField
          type="text"
          id="description"
          {...register("description", { required: "Description is required" })}
          className="w-full"
        />
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}

        <button
          type="submit"
          className="bg-blue-200 hover:bg-blue-300 py-5 px-10 rounded-lg"
        >
          {id ? "UPDATE" : "ADD"}
        </button>
      </form>
    </div>
  );
};

export default DetailAdmin;
