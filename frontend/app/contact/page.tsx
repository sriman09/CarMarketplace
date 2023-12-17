import React from "react";

function page() {
  return (
    <div className="min-h-screen px-10 md:px-28 bg-[#f2f2f2] flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 py-28 flex flex-col gap-10">
        <span className="text-3xl font-bold">CONTACT US</span>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <p>sales@marketplace.com</p>
            <p>The best way to get answer faster.</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <p>For Buying Cars</p>
            <p>(+91) 9999 9999 99</p>
            <p>We are happy to help (10am to 10pm)</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <p>For Selling Cars</p>
            <p>(+91) 9999 9999 99</p>
            <p>We are happy to help (10am to 10pm)</p>
          </div>
        </div>

        <span className="text-3xl font-bold mt-10">OUR SHOWROOM</span>
        <div className="flex flex-col">
          <p>Gurgaon Headquarters</p>
          <p>Plot No. 134, Sector 37, Pace City 1, Gurgaon, Haryana - 122001</p>
        </div>
        <div className="flex flex-col">
          <p>Gurgaon Headquarters</p>
          <p>Plot No. 134, Sector 37, Pace City 1, Gurgaon, Haryana - 122001</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-lg px-5 md:px-10 py-16 flex flex-col w-full mb-5">
          <p className="text-black font-bold text-2xl">SEND US AN EMAIL</p>
          <p>Drop us a line using the below form</p>
          <div className="flex gap-5 w-full mt-10">
            <input
              type="text"
              className="w-1/2 p-2 rounded-xl border border-black"
              placeholder="YOUR NAME*"
            />
            <input
              type="text"
              className="w-1/2 p-2 rounded-xl border border-black"
              placeholder="LOCATION*"
            />
          </div>
          <div className="flex gap-5 w-full mt-5">
            <input
              type="text"
              className="w-1/2 p-2 rounded-xl border border-black"
              placeholder="EMAIL*"
            />
            <input
              type="text"
              className="w-1/2 p-2 rounded-xl border border-black"
              placeholder="PHONE*"
            />
          </div>
          <textarea
            placeholder="MESSAGE"
            className="w-full p-2 rounded-xl border border-black mt-5"
          />
          <button className="bg-black text-white hover:bg-white hover:text-black border border-black rounded-lg w-1/2 py-2 mt-5">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
