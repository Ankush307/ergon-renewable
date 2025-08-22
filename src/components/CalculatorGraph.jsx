"use client";
import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function ReturnsCalculator() {
    const [investment, setInvestment] = useState(10000);
    const [isMonthly, setIsMonthly] = useState(false);

    const series = [
        {
            name: "Annual Energy Production",
            type: "area",
            data: [
                { x: 2025, y: 0 },
                { x: 2030, y: 55000.000 },
                { x: 2035, y: 110000.000 },
                { x: 2040, y: 165000.000 },
                { x: 2045, y: 220000.000 },
                { x: 2050, y: 275000.000 },
                { x: 2055, y: 330000.000 },
            ],
        },
        {
            name: "Annual Returns",
            type: "area",
            data: [
                { x: 2025, y: 0 },
                { x: 2030, y: 7200.000 },
                { x: 2035, y: 14500.000 },
                { x: 2040, y: 22000.000 },
                { x: 2045, y: 30000.000 },
                { x: 2050, y: 38000.000 },
                { x: 2055, y: 5000.000 },
            ],
        },
    ];

    const options = {
        chart: { type: "line", toolbar: { show: false } },
        stroke: { width: [3, 2], curve: "straight" },
        fill: {
            type: ["solid", "solid"],
            opacity: [0.10, 0.35],
        },
        colors: ["#417D23", "#3026DA"],
        markers: { size: 4, strokeWidth: 2, hover: { size: 6 } },
        grid: {
            borderColor: "#e0e0e0",
            strokeDashArray: 2,
            xaxis: { lines: { show: true } },
            yaxis: { lines: { show: true } },
        },
        xaxis: { type: "category" },
        yaxis: {
            labels: {
                formatter: (val) => `$${val.toLocaleString()}`,
            },
        },
        tooltip: {
            shared: true,
            y: { formatter: (val) => `$${val.toLocaleString()}` },
        },
        legend: {
            position: "top",
            horizontalAlign: "center",
            fontSize: "12px",
            markers: { width: 14, height: 10, radius: 2 },
        },
        responsive: [
            {
                breakpoint: 1280,
                options: {
                    chart: { height: 500 },
                },
            },
            {
                breakpoint: 768,
                options: {
                    chart: { height: 400 },
                    legend: { fontSize: "10px" },
                },
            },
            {
                breakpoint: 480,
                options: {
                    chart: { height: 300 },
                    legend: { fontSize: "9px" },
                },
            },
        ],
    };

    return (
        <div className="px-4 sm:px-6 md:px-[30px] pb-16 md:pb-[146px]">
            <div className="max-w-[1862px] mx-auto bg-[#F9F8F9] rounded-xl px-4 sm:px-8 md:px-18 py-6 md:py-[37px]">
                <h3 className="text-center font-medium sm:text-lg mb-6">Returns Calculator</h3>
                <div className="grid grid-cols-2">
                    <div className="text-center mb-8 md:mb-11">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151414]">
                            $10000.00
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-[#7E858B] mt-2">Principal Invested</p>
                    </div>
                    <div className="text-center mb-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6D90BF]">$1380.69</h2>
                        <p className="text-sm sm:text-base md:text-lg text-[#7E858B] mt-2">Est. Dividends Received</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-6 gap-12">
                    <div>
                        <div className="flex items-center gap-4 md:gap-[30px] mb-5 md:mb-7">
                            <span className="w-8 h-8 sm:w-[38px] sm:h-10 text-lg sm:text-2xl flex items-center justify-center rounded-full bg-[#25324E] text-[#F8F9F9] font-bold">1</span>
                            <h3 className="font-semibold sm:font-bold text-base sm:text-lg md:text-xl text-gray-800">
                                How much do you plan to invest?
                            </h3>
                        </div>

                        <div className="pl-4 sm:pl-6 md:pl-8 pt-6 sm:pt-10 xl:pt-[55px] border-l border-[#8B8B8B]">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
                                <p className="text-lg sm:text-xl xl:text-2xl font-semibold text-[#404040]">Investment Amount</p>
                                <input type="number" className="w-full max-w-[330px] h-12 xl:h-[80px] outline-none text-lg sm:text-xl lg:text-2xl border border-[#CCCCCC] rounded-lg px-3 py-2" placeholder="$10000" />
                            </div>

                            <div className="flex items-center gap-2 sm:gap-3">
                                <span className="text-base sm:text-lg md:text-xl xl:text-2xl">One-time</span>
                                <button onClick={() => setIsMonthly(!isMonthly)} className={`w-16 xl:w-[92px] h-8 xl:h-15 flex items-center rounded-full p-1 cursor-pointer ${isMonthly ? "bg-blue-500" : "bg-gray-300"}`}>
                                    <div className={`bg-white w-6 xl:w-10 h-6 xl:h-11 rounded-full shadow-md transform duration-300 ${isMonthly ? "translate-x-6 xl:translate-x-11" : "translate-x-0"}`} />
                                </button>
                                <span className="text-base sm:text-lg md:text-xl xl:text-2xl">Monthly</span>
                            </div>

                            <div className="mt-10 xl:mt-[82px] pl-6 sm:pl-10 flex items-center gap-3 sm:gap-4">
                                <p className="text-lg md:text-2xl xl:text-3xl font-bold text-[#C0C0C1]">Back</p>
                                <button className="px-6 sm:px-8 xl:px-10 py-3 sm:py-4 xl:py-6 bg-[#87B547] text-lg sm:text-xl xl:text-3xl text-white font-bold rounded-full shadow-2xl hover:bg-green-600"> Next →</button>
                            </div>
                        </div>

                        <div className="mt-10 md:mt-[82px]">
                            <div className="flex items-center gap-4 sm:gap-7.5 mb-2">
                                <span className="min-w-8 h-8 sm:min-w-[38px] sm:h-10 text-lg sm:text-2xl flex items-center justify-center rounded-full bg-[#9199A6] text-[#F9F8F8] font-bold">2</span>
                                <h3 className="font-bold text-lg sm:text-xl md:text-2xl leading-[120%] xl:text-4xl text-[#8B8B8B] max-w-[650px]">
                                    Do you plan to withdraw your monthly dividends or automatically reinvest them?
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="xl:max-w-[810px] w-full max-xl:flex flex-col items-center">
                        <div className="w-full xl:max-w-[810px] max-w-[768px]">
                            <Chart options={options} series={series} type="line" height={740} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
