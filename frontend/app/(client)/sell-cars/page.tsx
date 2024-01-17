import sellCarHero from "@/public/assets/sellHero.jpeg";
function SellCars() {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="flex flex-row">
        <div className="w-1/2 bg-white"></div>
        <div
          className="bg-cover bg-center h-[80vh] w-1/2"
          style={{ backgroundImage: `url('/assets/sellHero.jpeg')` }}
        ></div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-16">
        <span className="font-bold text-3xl">
          AUTHORIZED CAR BUYERS IN INDIA
        </span>
        <span className="font-bold text-xl">CAR MARKETPLACE</span>
        <div className="w-full flex">
          <div className="w-3/5"></div>
          <div className="bg-white rounded-xl shadow-lg px-5 md:px-10 py-16 flex flex-col w-2/5 mb-5 mt-16 mx-10">
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
    </div>
  );
}

export default SellCars;
