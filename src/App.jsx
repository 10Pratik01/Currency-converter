import React, {useState}from 'react'; 
import {Inputbox} from './components';
import useCurrency from './hooks/useCurrencyInfo'

function App() { 
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('inr')
  const [to, setTo] = useState('usd')
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

  const convert = () => {
    setResult(amount * currencyInfo[to].value) 
  }

  return (
    <div className=''>
        <>
          <h1 className='text-3xl bg-orange-500'>Currency converter app</h1>
        </>
    </div>
  );
}

export default App;
