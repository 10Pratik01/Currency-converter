import React from "react";

function Inputbox({
  label,
  amount,
  changeAmount,
  changeCurrency,
  currencyOption = [],
  selectCurrency = "inr",
  amountdisable = false,
  currencydisable = false,

  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-blck/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transper
            py-1.5"
          type="number"
          placeholder="Amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
          <option value="inr">inr</option>
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
