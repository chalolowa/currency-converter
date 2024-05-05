import { useState } from "react";
import money from "/money.jpg";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyinfo";
import { InputBox } from "./components/index";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("eur");
  const [to, setTo] = useState("kes");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${money})` }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-100 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  className="absolute left-1/2 -tranlate-x-1/2 -translate-y-1/2 border-2 rounded-md border-white bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mb-1">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  currencyOptions={options}
                  amountDisabled
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg px-4 py-3"
              >
                Convert from {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
