import { usePathname } from "next/navigation";

interface BackButtonProps {
  back: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({ back }) => {
  const path = usePathname();

  return (
    <div className="flex flex-row gap-2 text-[#8C8C8C] items-center">
      {back && <button>{"<-"}</button>}
      <span className="text-sm md:text-base">{path.slice(1)}</span>
    </div>
  );
};

export default BackButton;
