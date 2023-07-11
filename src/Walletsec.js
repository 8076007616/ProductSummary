import React from "react";
import wallet from "./img/Frame 1000001962.png";
export default function Walletsec() {
    return (
        <div className="flex rounded-xl border-2 h-[54px] justify-between items-center justify-centre p-2">
            <div className="flex  items-center  text-sm ">
                <div>
                    <img src={wallet} alt="wallet" />
                </div>
                <div className="flex flex-col items-start ml-2">
                    <h1 className="font-medium text-[14px] text-gray-600">
                        Reddem 500 wallet
                    </h1>
                    <h2>To save ₹200 more</h2>
                </div>
            </div>

            <div className="text-[14px] font-extrabold text-primary px-4 py-2">APPLY</div>
        </div>
    );
}
