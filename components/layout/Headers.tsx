"use client";
import React from "react";
import { ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  status: string;
  labels: string;
  types: string;
};
const Headers = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <div
      className="h-screen w-auto bg-cover bg-center"
      style={{
        backgroundImage: "url('/Images/headers.jpg')",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex flex-col spacey-y-2 h-full items-center justify-center">
        <p className="text-white text-[18px] lg:text-[22px]">
          Discover your Ideal Property
        </p>
        <h1 className="text-[52px] text-center lg:text-[70px] text-white font-bold">
          Cari Rumah Idamanmu
        </h1>
        <div className="my-4 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <button className="bg-[#5856D5] px-4 text-center py-3 items-center text-white flex space-x-2 rounded-lg">
            <p className="text-[14px]">Find your Dream Home Now</p>
            <ArrowUpRight size={14} strokeWidth={2} />
          </button>{" "}
          <button className="bg-white px-4 py-3 text-center justify-center items-center text-black flex space-x-2 rounded-lg">
            <p className="text-[14px]">View Listing</p>
            <ArrowUpRight size={14} strokeWidth={2} />
          </button>
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex">
            <div className="  cursor-pointer bg-white w-[150px] py-2 rounded-tl-lg text-center hover:bg-[#5856D5] hover:text-white transition-all duration-300">
              For Sale
            </div>
            <div className="cursor-pointer bg-white w-[150px] py-2 rounded-tr-lg text-center hover:bg-[#5856D5] hover:text-white transition-all duration-300">
              For Rent
            </div>
          </div>
          <div className=" rounded-b-lg rounded-tr-lg bg-white">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 justify-center  lg:items-end space-x-0 lg:space-x-10 p-4"
            >
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-gray-700 text-sm font-medium">
                  Status
                </label>
                <select
                  {...register("status")}
                  className="lg:w-[160px] bg-[#F0F1F1] rounded-lg p-2 text-sm focus:outline-none "
                  defaultValue=""
                >
                  <option value="" disabled>
                    All Status
                  </option>
                  <option value="for-sale">For Sale</option>
                  <option value="for-rent">For Rent</option>
                  <option value="sold">Sold</option>
                </select>
                {errors.status && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.status.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-2  w-full">
                <label className="text-gray-700 text-sm font-medium">
                  Labels
                </label>
                <select
                  {...register("labels")}
                  className="lg:w-[160px] bg-[#F0F1F1] rounded-lg p-2 text-sm focus:outline-none "
                  defaultValue=""
                >
                  <option value="" disabled>
                    All Labels
                  </option>
                  <option value="california">California</option>
                  <option value="florida">Florida</option>
                  <option value="newyork">New York</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2  w-full">
                <label className="text-gray-700 text-sm font-medium">
                  Types
                </label>
                <select
                  {...register("types")}
                  className="lg:w-[160px] bg-[#F0F1F1] rounded-lg p-2 text-sm focus:outline-none "
                  defaultValue=""
                >
                  <option value="" disabled>
                    All Types
                  </option>
                  <option value="appartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="couch">Couch</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2  w-full">
                <label className="text-gray-700 text-sm font-medium">
                  Custom{" "}
                </label>
                <div className="relative">
                  <select
                    id="status"
                    name="status"
                    className="lg:w-[160px] w-full bg-[#F0F1F1] rounded-lg p-2 text-sm focus:outline-none appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      All Status
                    </option>
                    <option value="for-sale">For Sale</option>
                    <option value="for-rent">For Rent</option>
                    <option value="sold">Sold</option>
                  </select>
                  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                    <SlidersHorizontal size={14} />
                  </div>
                </div>
              </div>
              <div className="my-2 lg:my-0 w-full">
                <button
                  type="submit"
                  className="bg-[#5856D5] cursor-pointer hover:bg-[#5857ac] w-full px-10 py-2 text-center text-white rounded-lg"
                >
                  <p className="text-[14px]">Search</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
