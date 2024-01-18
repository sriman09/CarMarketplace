"use client";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import BackButton from "../../components/BackButton";
import {
  brandServices,
  inventoryServices,
  modelServices,
  uploadServices,
} from "@/app/_utils/apiServices";
import { Brand, Model } from "@/app/_utils/types";
import { brandState, modelState } from "@/app/_utils/atom";
import { useRecoilStateLoadable } from "recoil";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";

function CreateInventory() {
  const router = useRouter();
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  const [filePaths, setFilePaths] = useState<string[]>([]);

  const [brands, setBrands] = useRecoilStateLoadable<Brand[]>(brandState);
  const [models, setModels] = useState<Model[]>();

  const brandRef = useRef<HTMLSelectElement | null>(null);
  const modelRef = useRef<HTMLSelectElement | null>(null);
  const variantRef = useRef<HTMLInputElement | null>(null);
  const yearRef = useRef<HTMLInputElement | null>(null);
  const fuelRef = useRef<HTMLSelectElement | null>(null);
  const typeRef = useRef<HTMLSelectElement | null>(null);
  const kilometersRef = useRef<HTMLInputElement | null>(null);
  const ownershipRef = useRef<HTMLSelectElement | null>(null);
  const seatingCapacityRef = useRef<HTMLInputElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);

  const handleBrandChange = async () => {
    const response = await modelServices.getModelsByBrandId(
      brandRef?.current?.value || ""
    );
    setModels(response.models);
  };

  const handleFileChange = async (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = [...files];
      newFiles[index] = e.target.files[0];
      setFiles(newFiles);

      // Assuming you get file paths from the server after upload
      // Update this logic based on your actual server response
      const formData = new FormData();
      formData.append(`file`, e.target.files[0]);
      const response = await uploadServices.uploadImage(formData);
      setFilePaths((prevFilePaths) => [
        ...prevFilePaths,
        response.path, // Replace with actual file path
      ]);
    }
  };

  const handleAddFileInput = () => {
    setFiles([...files, null]);
  };

  const handleRemoveFile = (
    index: number,
    e: React.MouseEvent<HTMLParagraphElement>
  ) => {
    e.preventDefault();

    // Remove the file path from the array
    setFilePaths((prevFilePaths) => {
      const newFilePaths = [...prevFilePaths];
      newFilePaths.splice(index, 1);
      return newFilePaths;
    });

    // Remove the file from the files array
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      modelRef.current?.value &&
      yearRef.current?.value &&
      priceRef.current?.value &&
      colorRef.current?.value &&
      seatingCapacityRef.current?.value &&
      ownershipRef.current?.value &&
      typeRef.current?.value &&
      fuelRef.current?.value &&
      kilometersRef.current?.value &&
      variantRef.current?.value &&
      filePaths.length > 0
    ) {
      const payload = {
        model: modelRef.current.value,
        year: yearRef.current.value,
        price: priceRef.current.value,
        color: colorRef.current.value,
        seatingCapacity: seatingCapacityRef.current.value,
        ownership: ownershipRef.current.value,
        vehicleType: typeRef.current.value,
        fuelType: fuelRef.current.value,
        kilometers: kilometersRef.current.value,
        variant: variantRef.current.value,
        images: filePaths,
      };
      console.log("Payload", payload);
      inventoryServices.registerCar(payload).then(() => {
        router.back();
      });
    } else {
      toast.error("Please Provide all the details.", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <BackButton back={true} />
      <div className="bg-white px-5 pt-5 pb-10 mt-5 rounded-xl shadow-xl flex flex-col">
        <span className="text-2xl font-bold text-gray-900 text-center">
          Create Inventory
        </span>
        <form
          className="flex flex-col gap-2 py-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {/* First Row */}
            <div className="flex flex-col gap-1">
              <label>Brand</label>
              <select
                className="border-2 border-gray-600 px-2 py-1"
                ref={brandRef}
                onChange={handleBrandChange}
              >
                <option value="">Select</option>
                {brands.contents.map((brand: Brand, index: number) => (
                  <option key={index} value={brand._id}>
                    {brand.brandName}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Model</label>
              <select
                className="border-2 border-gray-600 px-2 py-1"
                ref={modelRef}
              >
                <option value="">Select</option>
                {models &&
                  models.map((model, index) => (
                    <option key={index} value={model._id}>
                      {model.modelName}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Variant</label>
              <input
                type="text"
                placeholder="Variant"
                className="border-2 border-gray-600 px-2 py-1"
                ref={variantRef}
              />
            </div>

            {/* Second Row */}
            <div className="flex flex-col gap-1">
              <label>Year</label>
              <input
                type="text"
                placeholder="Year"
                className="border-2 border-gray-600 px-2 py-1"
                ref={yearRef}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Fuel</label>
              <select
                className="border-2 border-gray-600 px-2 py-1"
                ref={fuelRef}
              >
                <option>Select</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="ev">EV</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Vehicle Type</label>
              <select
                className="border-2 border-gray-600 px-2 py-1"
                ref={typeRef}
              >
                <option value="">Select</option>
                <option value="sedan">Sedan</option>
                <option value="hatchback">Hatchback</option>
                <option value="suv">SUV</option>
                <option value="muv">MUV</option>
              </select>
            </div>

            {/* Third Row */}
            <div className="flex flex-col gap-1">
              <label>Kilometers</label>
              <input
                type="number"
                placeholder="Kilometers"
                className="border-2 border-gray-600 px-2 py-1"
                ref={kilometersRef}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Ownership</label>
              <select
                className="border-2 border-gray-600 px-2 py-1"
                ref={ownershipRef}
              >
                <option value="">Select</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Seating Capacity</label>
              <input
                type="number"
                placeholder="Seating Capacity"
                className="border-2 border-gray-600 px-2 py-1"
                ref={seatingCapacityRef}
              />
            </div>

            {/* Fourth Row */}
            <div className="flex flex-col gap-1">
              <label>Color</label>
              <input
                type="text"
                placeholder="Color"
                className="border-2 border-gray-600 px-2 py-1"
                ref={colorRef}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                className="border-2 border-gray-600 px-2 py-1"
                ref={priceRef}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-5">
            {files.map((file, index) => (
              <div
                key={index}
                className="image-upload-container relative group"
              >
                <label
                  htmlFor={`fileInput-${index}`}
                  className="cursor-pointer"
                >
                  {file ? (
                    <div className="w-32 h-32 relative">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${index}`}
                        className="w-32 h-32 object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                        <p
                          className="text-white font-bold cursor-pointer"
                          onClick={(e) => handleRemoveFile(index, e)}
                        >
                          X
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-32 h-32 border-dashed border-2 border-gray-300 flex items-center justify-center">
                      <p className="text-gray-500">Add Image</p>
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id={`fileInput-${index}`}
                  onChange={(e) => handleFileChange(e, index)}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            ))}
            <div
              className="w-32 h-32 border-dashed border-2 border-gray-300 flex items-center justify-center cursor-pointer"
              onClick={handleAddFileInput}
            >
              <span className="text-4xl text-gray-500">+</span>
            </div>
          </div>
          <div className="grid place-items-center mt-8">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-xl text-white w-1/3 rounded py-2">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateInventory;
