import Image from "next/image";
import Link from "next/link";
import filter_img from "../../public/assets/filter.svg";

function page() {
  return (
    <>
      <div className="flex flex-col px-10 md:px-28 gap-10">
        {/* Navigation */}
        <div className="flex flex-row gap-5 items-center mt-6">
          <Link href={"/"} className="text-sm">
            HOME
          </Link>
          <span className="text-sm">{">"}</span>
          <span className="text-sm text-red-500">COLLECTION</span>
        </div>
        {/* Header */}
        <div className="flex flex-row justify-between items-center border-b-2 pb-5 mb-5">
          <span className="text-xl font-bold">TOTAL 1589 RESULTS FOUND</span>
          <div className="flex flex-row gap-5">
            <div className="flex items-center gap-2">
              <span>Filters: </span>
              <button className="border border-gray-400 rounded-2xl px-4 bg-slate-950">
                <Image src={filter_img} alt="filter" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span>Sort By: </span>
              <select className="p-2 border-2 rounded-md">
                <option>Price</option>
                <option>Price- High to Low</option>
                <option>Price- Low to High</option>
              </select>
            </div>
          </div>
        </div>
        {/* Car Listing */}
      </div>
    </>
  );
}

export default page;
