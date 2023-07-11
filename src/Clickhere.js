import React from "react";

export default function Clickhere() {
    return (
        <div className="flex rounded-xl border-2 border-t-0 justify-between p-4 items-center">
            <div className="flex flex-col items-start">
                <div className="text-[14px] font-medium">Apply your refferal code<br />
                    to get <span className="text-green-700">₹200</span> off</div>
                <div className="text-[10px] font-medium">validity:13 Dec 2022, 23:55</div>
            </div>
            <span className="text-green-700 text-[14px] font-semibold">Click Here</span>
        </div>
    );
}
