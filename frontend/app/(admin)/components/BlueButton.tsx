"use client";
interface BlueButtonProps {
  children: string;
  onClick: () => void;
}

const BlueButton: React.FC<BlueButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white px-2 py-1 rounded-md whitespace-nowrap"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BlueButton;
