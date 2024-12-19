"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const penjualan = [12, 14, 5, 7, 2, 3];

const data = {
  labels: ["Roti", "Sayuran", "Seblak", "Siomay", "Anggur", "Iceland"],
  datasets: [
    {
      label: "Penjualan",
      data: penjualan,
      backgroundColor: [
        "rgba(233, 8, 38, 0.6)",
        "rgba(8, 8, 233, 0.6)",
        "rgba(233, 226, 8, 0.6)",
        "rgba(8, 233, 23, 0.6)",
        "rgba(143, 8, 233, 0.6)",
        "rgba(233, 90, 8, 0.6)",
      ],
    },
  ],
};
const BestSellingChart = () => {
  return (
    <div className="bg-slate-800 px-8 py-4 rounded-lg">
      <h3 className="text-xl font-semibold">Best Selling Chart</h3>
      <div className="p-4">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default BestSellingChart;
