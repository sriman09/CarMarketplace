"use client";
import delete_icon from "../../../public/assets/delete-icon.svg";
import edit_icon from "../../../public/assets/edit-icon.svg";
import Image from "next/image";
import BlueButton from "../components/BlueButton";
import { useEffect, useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import BackButton from "../components/BackButton";
import DeleteModal from "../components/DeleteModal";
import { useRecoilState } from "recoil";
import { brandState, modelState } from "@/app/_utils/atom";
import CreateModal from "../components/CreateModal";
import EditModal from "../components/EditModal";
import { Brand, Model } from "@/app/_utils/types";
import { brandServices, modelServices } from "@/app/_utils/apiServices";
import { toast } from "react-toastify";

function ModelsPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const [models, setModels] = useRecoilState<Model[]>(modelState);
  const [brands, setBrands] = useRecoilState<Brand[]>(brandState);

  const [editData, setEditData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState({
    title: "Delete ",
    subtitle: "Are you sure you want to delete this model",
    name: "",
    deleteId: "",
  });

  let loader = false;

  const getModels = async () => {
    const response = await modelServices.getModels(1);
    setModels(response.models);
  };
  const getBrands = async () => {
    const response = await brandServices.getBrands();
    setBrands(response.brands);
  };

  useEffect(() => {
    if (brands.length === 0) getBrands();
  }, []);

  useEffect(() => {
    getModels();
  }, []);

  const handleDeleteClick = (item: any) => {
    setModalContent((prev) => ({
      ...prev,
      name: item.name,
      deleteId: item._id,
    }));
    setShowDeleteModal(true);
  };

  const handleDeleteModalYesClick = () => {
    modelServices.deleteModel(modalContent.deleteId).then(() => {
      setShowDeleteModal(false);
      getModels();
    });
  };

  const handleCreateModalYesClick = () => {
    console.log("Create Modal Clicked!");
  };

  const handleEditModalClick = (item: Model) => {
    setShowEditModal(true);
    setEditData(item);
  };

  const handleSearch = async () => {
    if (inputRef.current?.value && inputRef.current?.value.length > 0) {
      const response = await modelServices.searchModels({
        searchQuery: inputRef.current?.value,
      });
      setModels(response.models);
    } else {
      toast.error("Please enter something.");
    }
  };

  return (
    <>
      <BackButton back={false} />
      <div className="flex flex-col mt-10">
        <div className="flex flex-row justify-between">
          <SearchBar
            placeholder="Search Models"
            inputRef={inputRef}
            handleSearch={handleSearch}
          />
          <BlueButton onClick={() => setShowCreateModal(true)}>
            Create Model
          </BlueButton>
        </div>
        <div className="overflow-x-scroll bg-white mt-5">
          <table className="w-full border-collapse border border-gray-300  text-xs md:text-sm lg:text-base">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4">Model Name</th>
                <th className="py-2 px-4">Brand</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {models.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-2 text-center"
                >
                  <td className="py-2 px-4">{item.modelName}</td>
                  <td className="py-2 px-4">{item.brandName}</td>
                  <td className="py-2 px-4 flex gap-3 justify-center">
                    <button onClick={() => handleEditModalClick(item)}>
                      <Image
                        src={edit_icon}
                        alt="edit"
                        height={20}
                        width={20}
                      />
                    </button>
                    <button onClick={() => handleDeleteClick(item)}>
                      <Image
                        src={delete_icon}
                        alt="edit"
                        height={20}
                        width={20}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showDeleteModal && (
          <DeleteModal
            showDeleteModal={showDeleteModal}
            setShowDeleteModal={setShowDeleteModal}
            modalContent={modalContent}
            handleDeleteModalYesClick={handleDeleteModalYesClick}
            loader={loader}
          />
        )}
        {showCreateModal && (
          <CreateModal
            showModal={showCreateModal}
            setShowModal={setShowCreateModal}
            modalFor="models"
            handleModalYesClick={handleCreateModalYesClick}
            loader={loader}
          />
        )}
        {showEditModal && (
          <EditModal
            showModal={showEditModal}
            setShowModal={setShowEditModal}
            modalFor="models"
            loader={loader}
            editData={editData}
          />
        )}
      </div>
    </>
  );
}

export default ModelsPage;
