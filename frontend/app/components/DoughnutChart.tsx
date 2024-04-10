"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
    easy: any;
    med: any;
    hard: any;
    misc: any;
}

const DoughnutChart:React.FC<DoughnutChartProps> = ({easy, med, hard, misc}) => {
    const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;

    let data = [
        {
            label: "Easy",
            value: easy,
            color: "#2dd4bf",
            cutout: "50%",
        },
        {
            label: "Medium",
            value: med,
            color: "#0284c7",
            cutout: "50%",
        },
        {
            label: "Hard",
            value: hard,
            color: "#f59e0b",
            cutout: "50%",
        },
        {
            label: "Misc",
            value: misc,
            color: "#dc2626",
            cutout: "50%",
        },
    ]

    const options: any = {
        maintainAspectRatio: false, 
        plugins: {
            responsive: true,
        },
        cutout: data.map((item) => item.cutout),
    };

    const finalData = {
        labels: data.map((item) => item.label),
        datasets: [
            {
                data: data.map((item) => Math.round(item.value)),
                backgroundColor: data.map((item) => item.color),
                borderColor: data.map((item) => item.color),
                borderWidth: 1,
                dataVisibility: new Array(data.length).fill(true),
            },
        ],
    };

    return (
    <div className={`m-auto ${screenWidth<1000?'mt-2': 'ml-2'}`} style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <Doughnut data={finalData} options={options} className="bg-[#ffffff] shadow-md rounded-lg p-4"/>
    </div>
    )
}

export default DoughnutChart