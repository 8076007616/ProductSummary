import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import teasure from "./img/treasure.png";
import frame1 from './img/frame1.png'
import group from './img/group.png'
import books from './img/books1.png'

export default function Addmoreitems() {
    return (
        <div className="overflow-hidden flex flex-col items-start p-5  rounded-lg shadow-[0_1px_8px_0_rgba(0,0,0,0.08)] ">
            <div className="text-[20px] font-bold leading-[32px] absolute ">Add more items</div>
            <div className="text-[16px] text-gray-500 leading-[3] mt-[15px] text-[#3D3D3D)] ">Recomended for you</div>
            <div className="flex gap-x-4 over overflow-scroll w-full">
                <div className="w-[178px] h-[274px] rounded-xl border-2 border-[#EAECEF] border-solid flex flex-col justify-center items-center text-[#EAECEF)]">
                    <div className="w-[152px] h-[152px] shrink-0 rounded-md bg-gradient-to-tr from-gray-100/[1] to-[#EAECEF] flex items-center justify-center">
                        <img className="" src={teasure} alt="teasure" />
                    </div>
                    <div className="w-full px-5 pt-[5px] text-[16px] font-medium  text-start flex items-center">
                        Khajana <AiFillInfoCircle size={20} className="text-primary ml-2" />{" "}
                    </div>
                    <div className="w-full px-5 text-[16px] font-medium  text-start">
                        ₹8500
                    </div>
                    <div className="w-full h-[0.1px] bg-gray-600/[0.4] my-2"></div>
                    <div className="w-full px-5 mt-1 flex justify-start items-center text-start">
                        <img src={frame1} alt="framebox" />
                        <h1 className="ml-2 text-primary font-semibold">Add</h1>
                    </div>
                </div>
                <div className="w-[178px] h-[274px] shrink-0 border-2  border-[#EAECEF] rounded-xl flex flex-col justify-center items-center">
                    <div className="w-[152px] h-[152px] shrink-0 rounded-md bg-gradient-to-tr from-gray-100/[0.5] to-[#EAECEF] flex items-center justify-center">
                        <img className="" src={group} alt="teasure" />
                    </div>
                    <div className="w-full px-5 pt-[5px] text-[16px] font-medium  text-start flex items-center">
                        Khajana <AiFillInfoCircle size={20} className="text-primary ml-2" />{" "}
                    </div>
                    <div className="w-full px-5 text-[16px] font-medium  text-start">
                        ₹8500
                    </div>
                    <div className="w-full h-[0.1px] bg-gray-600/[0.4] my-2"></div>
                    <div className="w-full px-5 mt-1 flex justify-start items-center text-start">
                        <img src={frame1} alt="framebox" />
                        <h1 className="ml-2 text-primary font-semibold">Add</h1>
                    </div>
                </div>
                <div className="w-[178px] h-[274px] shrink-0 border-2  border-[#EAECEF] rounded-xl flex flex-col justify-center items-center">
                    <div className="w-[152px] h-[152px] shrink-0 rounded-md bg-gradient-to-tr from-gray-100/[0.5] to-[#EAECEF] flex items-center justify-center">
                        <img className="" src={books} alt="teasure" />
                    </div>
                    <div className="w-full px-5 pt-[5px] text-[16px] font-medium  text-start flex items-center">
                        Khajana <AiFillInfoCircle size={20} className="text-primary ml-2" />{" "}
                    </div>
                    <div className="w-full px-5 text-[16px] font-medium  text-start">
                        ₹8500
                    </div>
                    <div className="w-full h-[0.1px] bg-gray-600/[0.4] my-2"></div>
                    <div className="w-full px-5 mt-1 flex justify-start items-center text-start">
                        <img src={frame1} alt="framebox" />
                        <h1 className="ml-2 text-primary font-semibold">Add</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
