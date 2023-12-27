export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-row h-screen">
      <div className="w-7/12 bg-slate-400 hidden md:block"></div>
      <div className="w-full md:w-5/12 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
