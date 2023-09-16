
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Cart from './components/Cart'

let totalCredit = 0;

function App() {

  const [selected, setSelected] = useState([]);
  const handleSelect = course => {
    if(totalCredit+course.credit <=20){
      if(selected.find(scourse => scourse.id === course.id) === undefined){
        const newselected = [...selected, course]
        totalCredit = totalCredit + course.credit;
        setSelected(newselected);
      }
      else{
        alert("data exists")
      }
    }
    else{
      alert("You have reached the limit")
    }
  }

  return (
    <>
      <h1 className='text-center text-2xl font-bold py-12'>Course Registration</h1>
      <div className='flex gap-6 w-11/12 mx-auto'>
        <Cards handleSelect={handleSelect}></Cards>
        <div className='w-1/4'>
          <Cart selected={selected} totalCredit={totalCredit}></Cart>
        </div>
      </div>
    </>
  )
}

export default App
