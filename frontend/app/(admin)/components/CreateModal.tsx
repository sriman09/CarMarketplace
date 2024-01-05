import Modal from "react-modal";
import { FC } from "react";

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
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-2 px-2 py-1"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border-2 px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border-2 px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Type</label>
              <select className="border-2 px-2 py-1">
                <option>Select</option>
                <option>Admin</option>
                <option>Employee</option>
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
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Logo</label>
              <input
                type="file"
                placeholder="Logo"
                className="border-2 px-2 py-1"
              />
            </div>
          </form>
        </>
      );
    } else if (modalFor === "models") {
      return (
        <>
          <span className="text-2xl font-bold">Create Model</span>
          <form className="flex flex-col gap-2 py-5">
            <div className="flex flex-col gap-1">
              <label>Model Name</label>
              <input
                type="text"
                placeholder="Model Name"
                className="border-2 px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Type</label>
              <select className="border-2 px-2 py-1">
                <option>Select</option>
                <option>Admin</option>
                <option>Employee</option>
              </select>
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

export default CreateModal;
