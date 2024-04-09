'use client'
import { fetchFullScorecard } from "@/app/server-actions/fetchFullScorecard";
import { randomInt } from "crypto";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import * as XLSX from "xlsx";

const ScorecardModal = () => {
    const [loading, setLoading] = useState<any>(true);
    const [downloading, setDownloading] = useState<any>(false);
    const [scorecardData, setScorecardData] = useState<any>([]);
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        const fetchScorecardData = async () => {
            const [userId, quizId] = id.split('%2B');
            const { status, data } = await fetchFullScorecard({ userId, quizId });
            setScorecardData(data?.data[0]);
            setLoading(false);
        }
        fetchScorecardData();
    }, [id])
    const onGetExportProduct = async () => {
        const num = 1+Math.floor(Math.random()*10);
        const title=`Scorecard_${num}`
        const worksheetname=`IFScorecard_${num}`
        try {
            setDownloading(true);
            if (scorecardData && scorecardData.correct_answers && scorecardData.incorrect_answers) {
                const dataToExport = [
                    ...scorecardData.correct_answers.map((questions: any, index: any) => ({
                        Question: questions[0],
                        Category: questions[3],
                        Your_Answer: questions[2],
                        Correct_Answer: questions[1],
                    })),
                    ...scorecardData.incorrect_answers.map((questions: any, index: any) => ({
                        Question: questions[0],
                        Category: questions[3],
                        Your_Answer: questions[2],
                        Correct_Answer: questions[1],
                    }))
                ];
                const workbook = XLSX.utils.book_new();
                const worksheet = XLSX.utils.json_to_sheet(dataToExport);
                XLSX.utils.book_append_sheet(workbook, worksheet, worksheetname);
                XLSX.writeFile(workbook, `${title}.xlsx`);
                setDownloading(false);
            } else {
                setLoading(false);
                console.log("#==================Export Error")
            }
        } catch (error: any) {
            setLoading(false);
            console.log("#==================Export Error", error.message);

        }
    };
    return (
        <div>
            <div className="w-full shadow-md p-4">
                {loading ?
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <h1 className="ml-auto mr-2">Loading Scorecard</h1>
                            <span className="loading loading-dots loading-md mr-auto"></span>
                        </div>
                        <div className="flex flex-col gap-4 w-full mt-5">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-16 w-full"></div>
                            <div className="skeleton h-16 w-full"></div>
                            <div className="skeleton h-8 w-full"></div>
                            <div className="skeleton h-8 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-2 w-full"></div>
                        </div>
                    </div>
                    :
                    <>
                        <div className="flex flex-row">
                            <button className="btn btn-sm mr-auto hover:btn-neutral text-white bg-[#0c4a6e]" onClick={onGetExportProduct}><FaCloudDownloadAlt /> Download
                            {downloading && <span className="loading loading-spinner text-white text-sm"></span>}</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table mt-2">
                                <thead>
                                    <tr className="bg-[#94a3b8] text-white font-bold">
                                        <th>#</th>
                                        <th>Question</th>
                                        <th>Category</th>
                                        <th>Correct Answer</th>
                                        <th>Your Answer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scorecardData?.correct_answers?.map((questions: any, index: any) => (
                                        <tr className="text-xs" key={index}>
                                            <th>{index + 1}</th>
                                            <td>{questions[0]}</td>
                                            <td>{questions[3]}</td>
                                            <td>{questions[1]}</td>
                                            <td>{questions[2]}</td>
                                        </tr>
                                    ))}
                                    {scorecardData?.incorrect_answers?.map((questions: any, index: any) => (
                                        <tr className="text-xs" key={index}>
                                            <th>{scorecardData?.correct_answers?.length + index + 1}</th>
                                            <td>{questions[0]}</td>
                                            <td>{questions[3]}</td>
                                            <td>{questions[1]}</td>
                                            <td>{questions[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex flex-row mt-2">
                                <button className="btn m-auto btn-sm pl-5 pr-5 font-bold btn-accent text-white">Score: {scorecardData?.total_score}</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default ScorecardModal