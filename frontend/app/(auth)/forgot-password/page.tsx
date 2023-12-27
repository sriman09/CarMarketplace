import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col w-full px-8 md:px-16 gap-4">
      <span className="text-2xl font-bold">No Problem!</span>
      <span className="text-sm">
        Please enter your Email ID to get recovery mail.
      </span>
      <div className="flex flex-col">
        <span className="text-sm font-bold">Email Address</span>
        <input
          type="email"
          placeholder="Enter your Email"
          className="p-2 border border-gray-300"
        />
      </div>
      <button className="bg-blue-700 text-white rounded-md py-2">
        Sign in
      </button>
      <span className="font-bold text-center">
        <Link href={"/login"} className="hover:text-blue-700">
          Back to Login
        </Link>
      </span>
    </div>
  );
}
