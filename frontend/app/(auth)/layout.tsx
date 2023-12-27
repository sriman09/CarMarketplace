import Image from "next/image";
import cover from "../../public/assets/auth_cover.png";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-row h-screen">
      <div className="w-7/12 bg-gray-200 hidden md:block">
        <Image
          src={cover}
          alt="cover"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full md:w-5/12 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
