"use client";
import { dashboardState } from "@/app/_utils/atom";
import jwtInterceptor from "@/app/_utils/jwtInterceptor";
import { DashboardForCar, Inventory } from "@/app/_utils/types";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import BackButton from "../components/BackButton";

function getCurrentMonthFirstAndLastDate() {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  // Formatting first day of the month
  const formattedFirstDay = `${firstDayOfMonth.getFullYear()}-${String(
    firstDayOfMonth.getMonth() + 1
  ).padStart(2, "0")}-${String(firstDayOfMonth.getDate()).padStart(2, "0")}`;

  // Formatting last day of the month
  const formattedLastDay = `${lastDayOfMonth.getFullYear()}-${String(
    lastDayOfMonth.getMonth() + 1
  ).padStart(2, "0")}-${String(lastDayOfMonth.getDate()).padStart(2, "0")}`;

  return {
    firstDayOfMonth: formattedFirstDay,
    lastDayOfMonth: formattedLastDay,
  };
}

const Dashboard: React.FC = () => {
  const [dashboardData, setDashboardData] =
    useRecoilState<DashboardForCar | null>(dashboardState);
  const { firstDayOfMonth, lastDayOfMonth } = getCurrentMonthFirstAndLastDate();
  const [startDate, setStartDate] = useState(firstDayOfMonth);
  const [endDate, setEndDate] = useState(lastDayOfMonth);

  const fetchDashboardDate = async () => {
    const res = await jwtInterceptor.get(
      `dashboard-car-report?startDate=${startDate}&endDate=${endDate}`
    );
    setDashboardData(res.data);
  };

  useEffect(() => {
    if (!dashboardData) fetchDashboardDate();
  }, []);

  function formatDate(inputDate: Date) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dateObj = new Date(inputDate);
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    return `${day} ${month} ${year}`;
  }

  return (
    <div>
      <BackButton back={false} />
      {/* Cards */}
      <div className="flex gap-5 mt-10">
        <div className="w-1/3 bg-[#023047] text-white shadow-xl rounded-xl flex flex-col justify-center items-center py-10 gap-5">
          <span className="text-5xl">{dashboardData?.soldCarsCount}</span>
          <span className="text-xl">Total Car sold</span>
        </div>
        <div className="w-1/3 bg-[#c1121f] text-white shadow-xl rounded-xl flex flex-col justify-center items-center py-10 gap-5">
          <span className="text-5xl">
            {"₹" + dashboardData?.totalRevenue.toLocaleString("en-IN")}
          </span>
          <span className="text-xl">Total Revenue</span>
        </div>
      </div>

      {/* Title */}
      <div className="mt-10 mb-5">
        <span className="text-3xl font-bold text-[#264653]">Recently Sold</span>
      </div>

      {/* Table */}
      <div className="overflow-x-scroll bg-white mt-5">
        <table className="w-full border-collapse border border-gray-300  text-xs md:text-sm lg:text-base">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4">Brand</th>
              <th className="py-2 px-4">Model</th>
              <th className="py-2 px-4">Sold Price</th>
              <th className="py-2 px-4">Date of Sell</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData?.soldCars.map((item: Inventory, index: number) => (
              <tr key={index} className="hover:bg-gray-50 border-2 text-center">
                <td className="py-2 px-4">{item.brandName}</td>
                <td className="py-2 px-4">{item.modelName}</td>
                <td className="py-2 px-4">
                  {"₹" + item.price.toLocaleString("en-IN")}
                </td>
                <td className="py-2 px-4">{formatDate(item.soldDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
