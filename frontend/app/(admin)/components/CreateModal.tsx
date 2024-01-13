"use client";
import Modal from "react-modal";
import { ChangeEvent, FC, useRef, useState } from "react";
import {
  brandServices,
  modelServices,
  userServices,
} from "@/app/_utils/apiServices";
import { Brand, ModelPayload, User, UserPayload } from "@/app/_utils/types";
import { useRecoilState } from "recoil";
import { brandState } from "@/app/_utils/atom";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleModalYesClick: () => void;
  loader: boolean;
  modalFor: string;
}

const CreateModal: FC<ModalProps> = ({
  showModal,
  setShowModal,
  handleModalYesClick,
  loader,
  modalFor,
}) => {
  const [brands, setBrands] = useRecoilState<Brand[]>(brandState);

  // User
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const typeRef = useRef<HTMLSelectElement | null>(null);

  //Models
  const modelNameRef = useRef<HTMLInputElement | null>(null);
  const brandRef = useRef<HTMLSelectElement | null>(null);

  //Brands
  const brandNameRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File | null>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files && setSelectedFiles(e.target.files[0]);
  };

  const handleYesClick = async () => {
    if (modalFor === "user") {
      if (
        firstNameRef.current?.value &&
        lastNameRef.current?.value &&
        emailRef.current?.value &&
        passwordRef.current?.value &&
        typeRef.current?.value
      ) {
        const payload: UserPayload = {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          type: typeRef.current.value,
        };
        const response = await userServices.registerUser(payload);
        setShowModal(false);
        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        typeRef.current.value = "";
      } else {
        alert("Please provide all details");
      }
    } else if (modalFor === "models") {
      console.log(
        "payload",
        modelNameRef.current?.value,
        brandRef.current?.value
      );
      if (modelNameRef.current?.value && brandRef.current?.value) {
        const payload: ModelPayload = {
          brandId: brandRef.current.value,
          modelName: modelNameRef.current.value,
        };
        const response = await modelServices.registerModels(payload);
        setShowModal(false);
        modelNameRef.current.value = "";
        brandRef.current.value = "";
        alert(response.message);
      } else {
        alert("Please provide all the required field");
      }
    } else if (modalFor === "brands") {
      if (!selectedFiles) {
        alert("Please select at least one file");
        return;
      }

      try {
        const formData = new FormData();

        formData.append(`file`, selectedFiles);

        const brandNameValue = brandNameRef.current?.value || "";
        formData.append("brandName", brandNameValue);
        await brandServices.registerBrands(formData);
      } catch (error: any) {
        console.error("Error uploading files:", error.message);
      }
    }
  };
  const renderModal = () => {
    if (modalFor === "user") {
      return (
        <>
          <span className="text-2xl font-bold">Create User</span>
          <form className="flex flex-col gap-2 py-5">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-col gap-2">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-2 px-2 py-1"
                  ref={firstNameRef}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-2 px-2 py-1"
                  ref={lastNameRef}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border-2 px-2 py-1"
                ref={emailRef}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border-2 px-2 py-1"
                ref={passwordRef}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Type</label>
              <select className="border-2 px-2 py-1" ref={typeRef}>
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
              </select>
            </div>
          </form>
        </>
      );
    } else if (modalFor === "brands") {
      return (
        <>
          <span className="text-2xl font-bold">Create Brand</span>
          <form className="flex flex-col gap-2 py-5">
            <div className="flex flex-col gap-1">
              <label>Brand Name</label>
              <input
                type="text"
                placeholder="Brand Name"
                className="border-2 px-2 py-1"
                ref={brandNameRef}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Logo</label>
              <input
                type="file"
                placeholder="Logo"
                className="border-2 px-2 py-1"
                onChange={handleFileChange}
              />
            </div>
          </form>
        </>
      );
    } else if (modalFor === "models") {
      return (
        <>
          <span className="text-2xl font-bold">Create Model</span>
          <form className="flex flex-col gap-2 py-5 w-full">
            <div className="flex flex-col gap-1">
              <label>Brand</label>
              <select className="border-2 px-2 py-1" ref={brandRef}>
                <option value="">Select</option>
                {brands.map((brand, index) => (
                  <option key={index} value={brand._id}>
                    {brand.brandName}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label>Model Name</label>
              <input
                type="text"
                placeholder="Model Name"
                className="border-2 px-2 py-1"
                ref={modelNameRef}
              />
            </div>
          </form>
        </>
      );
    }
  };
  return (
    <Modal
      isOpen={showModal}
      contentLabel="Example Modal"
      style={{
        content: {
          borderRadius: "20px",
          padding: "1.5rem",
          margin: "auto",
          width: "80%",
          maxWidth: "500px",
          height: "70%",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
      }}
    >
      <div className="flex flex-col items-center justify-between h-full">
        {renderModal()}
        <div className="w-full gap-3 flex justify-center">
          {!loader ? (
            <>
              <button
                onClick={handleYesClick}
                className="font-semibold text-white px-5 py-2  w-2/5 md:w-1/3 rounded-md bg-blue-500"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="font-semibold border-2 border-customBlue2 text-customBlue2 px-5 py-2 w-2/5 md:w-1/3 rounded-md bg-[#fff]"
              >
                No
              </button>
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default CreateModal;
