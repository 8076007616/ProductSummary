import React from "react";
import img3 from "./img/itmscard.jpg";
import img4 from "./img/topper.png";
import img5 from "./img/books2.png";

export default function BuyinSec() {
    return (
        <div className="flex flex-col items-start gap-4 rounded-md shadow-[0_1px_8px_0_rgba(0,0,0,0.08)] mt-4 ">
            <h1 className="m-3 text-[16px] text-gray-500">
                You are buying <span className="font-medium text-black">(3) items</span>
            </h1>
            <div className="grid grid-cols-3 gap-[20px] ml-3 mb-3">
                <div className="flex flex-col p-2 border-2 rounded-md w-[84px] h-[103px]">
                    <img height="33px" width="66px" src={img3} alt="buying-sec" />
                    <div className="text-[12px] font-semibold text-center">
                        Arjuna JEE
                        <br /> Batch
                    </div>
                    <div className="text-[12px] font-light leading-4 text-center">
                        ₹5999
                    </div>
                </div>
                <div className="flex flex-col p-2 border-2 rounded-md w-[84px] h-[103px]">
                    <img height="33px" width="66px" src={img4} alt="buying-sec" />
                    <div className="text-[12px] font-semibold text-center">
                        Champion
                        <br /> Combo
                    </div>
                    <div className="text-[12px] font-light leading-4 text-center">
                        ₹5999
                    </div>
                </div>
                <div className="flex flex-col p-2 border-2 rounded-md w-[84px] h-[103px]">
                    <div className="bg-gray-200 rounded-sm flex justify-center">
                        <img width="28px" src={img5} alt="buying-sec" className="py-[2px]" />
                    </div>
                    <div className="text-[12px] font-semibold text-center">
                        Arjuna JEE
                        <br /> Books
                    </div>
                    <div className="text-[12px] font-light leading-4 text-center">
                        ₹5999
                    </div>
                </div>
            </div>
        </div>
    );
}
