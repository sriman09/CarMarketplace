import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col w-full px-8 md:px-16 gap-4">
      <span className="text-2xl font-bold">Welcome Back</span>
      <span className="text-sm">Please sign in to your Account</span>
      <div className="flex flex-col">
        <span className="text-sm font-bold">Email Address</span>
        <input
          type="email"
          placeholder="Enter your Email"
          className="p-2 border"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold">Password</span>
        <input
          type="password"
          placeholder="Enter your Password"
          className="p-2 border"
        />
      </div>
      <button className="bg-blue-700 text-white rounded-md py-2">
        Sign in
      </button>
      <span className="font-bold text-center">
        <Link href={"/forgot-password"} className="hover:text-blue-700">
          Forgot Password?
        </Link>
      </span>
    </div>
  );
}

export default page;
