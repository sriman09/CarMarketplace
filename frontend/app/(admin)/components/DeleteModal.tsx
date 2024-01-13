"use client";
import Image from "next/image";
import Modal from "react-modal";
import delete_img from "../../../public/assets/delete_img.jpeg";
import { FC } from "react";

interface DeleteModalProps {
  showDeleteModal: boolean;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalContent: {
    title: string;
    name: string;
    subtitle: string;
  };
  handleDeleteModalYesClick: () => void;
  loader: boolean;
}

const DeleteModal: FC<DeleteModalProps> = ({
  showDeleteModal,
  setShowDeleteModal,
  modalContent,
  handleDeleteModalYesClick,
  loader,
}) => {
  return (
    <Modal
      isOpen={showDeleteModal}
      contentLabel="Example Modal"
      style={{
        content: {
          borderRadius: "20px",
          padding: "1.5rem",
          margin: "auto",
          width: "80%",
          maxWidth: "450px",
          height: "65%",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
      }}
    >
      <div className="flex flex-col items-center justify-between h-full">
        <Image src={delete_img} className="w-40" alt={"Delete"} />
        <h1 className="text-black font-bold text-xl md:text-3xl text-center">
          {modalContent.title} {modalContent.name}
        </h1>
        <h3 className="mb-5 text-md md:text-xl text-customBlack font-medium font text-center">
          {modalContent.subtitle}
        </h3>
        <div className="w-full gap-3 flex justify-center">
          {!loader ? (
            <>
              <button
                onClick={handleDeleteModalYesClick}
                className="font-semibold text-white px-5 py-2  w-2/5 md:w-1/3 rounded-md bg-blue-500"
              >
                {/* {assessment_loading ? <Spinner removePy={true} /> : "Yes"} */}
                Yes
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
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

export default DeleteModal;
