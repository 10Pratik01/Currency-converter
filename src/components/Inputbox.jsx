import React, { useId } from "react";

function Inputbox({
  label,
  amount,
  changeAmount,
  changeCurrency,
  currencyOptions = [],
  selectCurrency = "usd",
  amountdisable = false,
  currencydisable = false,

  className = "",
}) {
  const amountID = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-blck/40 mb-2 inline-block" htmlFor={amountID}>
          {label}
        </label>
        <input
          id={amountID}
          className="outline-none w-full bg-transper
            py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountdisable}
          value={amount}
          onChange={(e) => changeAmount && changeAmount(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => changeCurrency && changeCurrency(e.target.value)}
          disabled={currencydisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
