import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectedCurrency = "eur",
  currencyOptions = [],
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {
  const id = useId();
  return (
    <div className={`flex bg-white text-sm rounded-lg ${className}`}>
      <div className="w-1/2">
        <label htmlFor={id} className="text-black/40 inline-block mb-2 px-1">
          {label}
        </label>
        <input
          type="number"
          id={id}
          className="w-full bg-transparent outline-gray py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="flex flex-wrap w-1/2 justify-end text-wrap">
        <p className="text-black/100 w-full mb-2 text-right p-1.5">Currency</p>
        <select
          className="rounded p-1 m-1 cursor-pointer outline-gray bg-gray-100"
          disabled={currencyDisabled}
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
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
};

export default InputBox;
