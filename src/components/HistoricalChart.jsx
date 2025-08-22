"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const HistoricalChart = () => {
    const [activeTab, setActiveTab] = useState("1Y");

    const options = {
        chart: {
            type: "bar",
            stacked: true,
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "75%",
            },
        },
        colors: ["#86B446", "#6D90BE"],
        xaxis: {
            categories: ["7/23", "8/23", "9/23", "10/23", "11/23", "12/23", "1/24", "2/24", "3/24", "4/24", "5/24"],
            labels: { style: { fontSize: "12px" } },
        },
        fill: {
            opacity: 1,
        },
        yaxis: {
            min: 0,
            max: 14,
            tickAmount: 7,
            labels: {
                style: { fontSize: "12px" },
                formatter: (val) => val.toFixed(0),
            },
        },
        legend: {
            position: "top",
            horizontalAlign: "center",
        },
        grid: {
            borderColor: "#E4E5E5",
            yaxis: { lines: { show: true } },
            xaxis: { lines: { show: false } },
        },
        dataLabels: { enabled: false },
        grid: {
            borderColor: '#e0e0e0',
            strokeDashArray: 0,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        responsive: [
            {
                breakpoint: 768,
                options: {
                    chart: {
                        height: 350,
                    },
                },
            },
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: 280,
                    },
                },
            },
        ],
    };

    const series = [
        {
            name: "Dividend Yield",
            data: [1, 5, 1, 4, 1, 3, 1, 2, 1, 6, 1],
        },
        {
            name: "Appreciation",
            data: [9, 8, 7, 6, 5, 5, 7, 7, 9, 8, 6],
        },
    ];

    return (
        <div className="py-[146px] px-4 lg:px-7.5 w-full">
            <div className="lg:px-18 px-5 max-w-[1862px] mx-auto py-[37px] bg-[#F9F8F9] rounded-xl">
                <div className="lg:py-5 lg:px-3">
                    {/* Tabs */}
                    <div className="flex gap-2 mb-4">
                        <button onClick={() => setActiveTab("1Y")} className={`px-4 py-1 cursor-pointer rounded-md text-sm font-medium ${activeTab === "1Y" ? "bg-green-600 text-white" : "bg-gray-100"}`}>
                            1Y
                        </button>
                        <button onClick={() => setActiveTab("All Time")} className={`px-4 py-1 cursor-pointer rounded-md text-sm font-medium ${activeTab === "All Time" ? "bg-green-600 text-white" : "bg-gray-100"}`}>
                            All Time
                        </button>
                    </div>
                    <h3 className="text-center font-medium sm:text-lg mb-2">Historical Performance</h3>

                    <div className="grid grid-cols-3 text-center mb-15">
                        <div>
                            <p className="text-4xl font-bold text-[#4A6585] mb-2">7.29%</p>
                            <p className="text-[#404140] text-sm">IRR</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-[#4A6585] mb-2">3.3%</p>
                            <p className="text-[#404140] text-sm">Avg Dividend Yield</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-[#4A6585] mb-2">6.3%</p>
                            <p className="text-[#404140] text-sm">Avg Appreciation</p>
                        </div>
                    </div>

                    <div>
                        <Chart options={options} series={series} type="bar" height={580} />
                    </div>
                    <p className="text-gray-400 text-xs mt-2">
                        *Monthly Appreciation And Dividend Yield Figures Are Presented As
                        Annualized Values, Calculated By Multiplying The Monthly Rates By 12.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HistoricalChart;
