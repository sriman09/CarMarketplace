interface BlueButtonProps {
  children: string;
}

const BlueButton: React.FC<BlueButtonProps> = ({ children }) => {
  return (
    <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
      {children}
    </button>
  );
};

export default BlueButton;
