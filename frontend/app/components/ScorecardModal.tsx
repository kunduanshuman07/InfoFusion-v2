'use client'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import * as XLSX from "xlsx";
interface ScorecardModalProps {
    modalOpen: any;
    handleClose: (modalOpen: any) => void;
}

const ScorecardModal: React.FC<ScorecardModalProps> = ({ modalOpen, handleClose }) => {
    // const onGetExportProduct = async (title?: string, worksheetname?: string) => {
    //     try {
    //       setLoading(true);
    //       const response = await fetch('https://fakestoreapi.com/products');
    //       // Check if the action result contains data and if it's an array
    //       if (products && Array.isArray(products)) {
    //         const dataToExport = products.map((pro: any) => ({
    //           title: pro.title,
    //           price: pro.lastname,
    //           category: pro.category,
    //           description: pro.description,
    //         })
    //           ,);
    //         // Create Excel workbook and worksheet
    //         const workbook = XLSX.utils.book_new();
    //         const worksheet = XLSX.utils?.json_to_sheet(dataToExport);
    //         XLSX.utils.book_append_sheet(workbook, worksheet, worksheetname);
    //         // Save the workbook as an Excel file
    //         XLSX.writeFile(workbook, `${title}.xlsx`);
    //         console.log(`Exported data to ${title}.xlsx`);
    //         setLoading(false);
    //       } else {
    //         setLoading(false);
    //         console.log("#==================Export Error")
    //       }
    //     } catch (error: any) {
    //       setLoading(false);
    //       console.log("#==================Export Error", error.message);
    
    //     }
    //   };
    return (
        <dialog id='my_modal_1' className={`modal ${modalOpen == true ? 'modal-open' : ''}`}>
            <div className="modal-box  w-11/12 max-w-5xl">
                <div className="flex flex-row mt-2">
                    <button className="btn btn-sm mr-auto hover:btn-neutral text-white bg-[#0c4a6e]" ><FaCloudDownloadAlt /> Download</button>
                    <button className="btn m-auto btn-sm pl-5 pr-5 font-bold btn-accent text-white">Score: 10</button>
                    <button className="btn m-auto btn-sm pl-5 pr-5 font-bold bg-[#f59e0b] text-white hover:bg-[#f59e0b]">Rating: 109</button>
                    <button className="btn btn-sm ml-auto bg-[#cbd5e1] text-neutral font-bold" onClick={handleClose}>Close <IoCloseSharp /></button>
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
                            <tr className="text-xs">
                                <th>1</th>
                                <td>Who was the first Prime Minister of India?</td>
                                <td>Easy</td>
                                <td>Jawahar Lal Nehru</td>
                                <td>Jawahar Lal Nehru</td>
                            </tr>
                            <tr className="text-xs">
                                <th>1</th>
                                <td>Who was the first Prime Minister of India?</td>
                                <td>Easy</td>
                                <td>Jawahar Lal Nehru</td>
                                <td>Jawahar Lal Nehru</td>
                            </tr>
                            <tr className="text-xs">
                                <th>1</th>
                                <td>Who was the first Prime Minister of India?</td>
                                <td>Easy</td>
                                <td>Jawahar Lal Nehru</td>
                                <td>Jawahar Lal Nehru</td>
                            </tr>
                            <tr className="text-xs">
                                <th>1</th>
                                <td>Who was the first Prime Minister of India?</td>
                                <td>Easy</td>
                                <td>Jawahar Lal Nehru</td>
                                <td>Jawahar Lal Nehru</td>
                            </tr>
                            <tr className="text-xs">
                                <th>1</th>
                                <td>Who was the first Prime Minister of India?</td>
                                <td>Easy</td>
                                <td>Jawahar Lal Nehru</td>
                                <td>Jawahar Lal Nehru</td>
                            </tr>
                            <tr className="text-xs">
                                <th>1</th>
                                <td>Who was the first Prime Minister of India?</td>
                                <td>Easy</td>
                                <td>Jawahar Lal Nehru</td>
                                <td>Jawahar Lal Nehru</td>
                            </tr>
                            <tr className="text-xs">
                                <th>1</th>
                                <td>Who was the first Prime Minister of India?</td>
                                <td>Easy</td>
                                <td>Jawahar Lal Nehru</td>
                                <td>Jawahar Lal Nehru</td>
                            </tr>
                            <tr className="text-xs">
                                <th>1</th>
                                <td>Who was the first Prime Minister of India?</td>
                                <td>Easy</td>
                                <td>Jawahar Lal Nehru</td>
                                <td>Jawahar Lal Nehru</td>
                            </tr>
                            <tr className="text-xs">
                                <th>1</th>
                                <td>Who was the first Prime Minister of India?</td>
                                <td>Easy</td>
                                <td>Jawahar Lal Nehru</td>
                                <td>Jawahar Lal Nehru</td>
                            </tr>
                            <tr className="text-xs">
                                <th>1</th>
                                <td>Who was the first Prime Minister of India?</td>
                                <td>Easy</td>
                                <td>Jawahar Lal Nehru</td>
                                <td>Jawahar Lal Nehru</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </dialog>
    )
}

export default ScorecardModal