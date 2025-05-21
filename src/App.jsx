import {useState}from 'react'; 
import {Inputbox} from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo'
import backgroundimage from './assets/background.jpg';

function App() { 
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [result, setResult] = useState(0)

  const currencyInfo = useCurrencyInfo(from) 

  const options = Object.keys(currencyInfo)

  // to swap two variables 
  const swap = () => {
    setFrom(to)
    setTo(from)
    setResult(amount)
    setAmount(result)
  }

  const final_converted_amount = () => {
    setResult(amount * currencyInfo[to]) 
  }

  return (
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat  '
   style={{backgroundImage:`url(${backgroundimage})`}}>
      <div className=' flex w-full justify-center'>
          <div className="w-full max-w-md -mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={(e) => {e.preventDefault(); final_converted_amount()}}>
                <div className="w-full mb-1">
                  <Inputbox 
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                 changeCurrency={(currency) => setFrom(currency)} 
                  selectCurrency={from} 
                  changeAmount={(amount) => setAmount(amount)}
                  /> 
                </div>
                <div className='relative w-full h-0.5'>
                  <button 
                  type='button'
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0/5'
                  onClick={swap}
                  >
                    swap 

                  </button>
                </div>
                <div className='w-full mt-1 mb-4'>
                  <Inputbox 
                  label='To' 
                  amount = {result}
                  currencyOptions={options}
                  changeCurrency={(currency) => setTo(currency)}
                  amountdisable
                  selectCurrency={to}
                  /> 

                </div>
                <button
                  type='submit'
                  className='w-full bg-blue-600 
                  text-white px4 py-3 rounded-lg cursor-pointer'
                >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
          </div>
      </div>

   </div>
  );
}

export default App;
