import React from "react";
import percentage from "./img/percentage.png";
export default function CuponSec() {
    return (
        <div className="flex items-center h-[54px] rounded-xl border-2 z-5 mt-2 p-2 justify-between">
            <div className="flex items-center">
                <img src={percentage} alt="percentage" />
                <h1 className="ml-3 text-gray-600 text-[14px]">Write Coupon<br /> Code</h1>
            </div>
            <span className="mr-1 px-2 py-2 text-primary font-bold text-[14px]">
                FIND COUPONS
            </span>
        </div>
    );
}
