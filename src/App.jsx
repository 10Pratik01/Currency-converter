import React, {useState}from 'react'; 
import {Inputbox} from './components';
import useCurrency from './hooks/useCurrencyInfos'

function App() { 
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('inr')
  const [to, setTo] = useState('usd')
  return (
    <div className=''>
        <>
          <h1 className='text-3xl'>Currency converter app</h1>
        </>
    </div>
  );
}

export default App;
