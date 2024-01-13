"use client";
import Modal from "react-modal";
import { FC, useState } from "react";
import { useRecoilState } from "recoil";
import { Brand } from "@/app/_utils/types";
import { brandState } from "@/app/_utils/atom";

interface EditModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  loader: boolean;
  modalFor: string;
  editData: any;
}

const EditModal: FC<EditModalProps> = ({
  showModal,
  setShowModal,
  loader,
  modalFor,
  editData,
}) => {
  //User
  const [firstName, setFirstName] = useState<string>(editData?.firstName);
  const [lastName, setLastName] = useState<string>(editData?.lastName);
  const [email, setEmail] = useState<string>(editData?.email);
  const [type, setType] = useState<string>(editData?.type);

  //Brands
  const [brandName, setBrandName] = useState<string>(editData?.brandName);
  const [logo, setLogo] = useState<string>(editData?.logo);

  //Models
  const [brands, setBrands] = useRecoilState<Brand[]>(brandState);
  const [brandId, setBrandId] = useState<string>(editData?.brandId);
  const [modelName, setModelName] = useState<string>(editData?.modelName);

  console.log("editData", editData);

  const renderModal = () => {
    if (modalFor === "user") {
      return (
        <>
          <span className="text-2xl font-bold">Edit User</span>
          <form className="flex flex-col gap-2 py-5">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-col gap-2">
                <label>First Name</label>
                <input
                  type="text"
                  className="border-2 px-2 py-1"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Last Name</label>
                <input
                  type="text"
                  className="border-2 px-2 py-1"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Type</label>
              <select
                className="border-2 px-2 py-1"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
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
          <span className="text-2xl font-bold">Edit Brand</span>
          <form className="flex flex-col gap-2 py-5 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label>Brand Name</label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="border-2 px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Logo</label>
              <input
                type="text"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
                className="border-2 px-2 py-1"
              />
            </div>
          </form>
        </>
      );
    } else if (modalFor === "models") {
      return (
        <>
          <span className="text-2xl font-bold">Edit Model</span>
          <form className="flex flex-col gap-2 py-5">
            <div className="flex flex-col gap-1">
              <label>Brand</label>
              <select
                className="border-2 px-2 py-1"
                value={brandId}
                onChange={(e) => setBrandId(e.target.value)}
              >
                <option value="">Select</option>
                {brands.map((brand) => (
                  <option key={brand._id} value={brand._id}>
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
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
              />
            </div>
          </form>
        </>
      );
    }
  };

  const handleModalYesClick = () => {
    console.log("Clicked");
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
                onClick={handleModalYesClick}
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

export default EditModal;
