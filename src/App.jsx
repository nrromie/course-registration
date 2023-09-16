
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Cart from './components/Cart'
import toast, { Toaster } from 'react-hot-toast';

let totalCredit = 0;
let totalprice = 0;

function App() {

  const [selected, setSelected] = useState([]);
  const handleSelect = course => {
    if(totalCredit+course.credit <=20){
      if(selected.find(scourse => scourse.id === course.id) === undefined){
        const newselected = [...selected, course]
        totalCredit = totalCredit + course.credit;
        totalprice = totalprice + course.price;
        setSelected(newselected);
      }
      else{
        toast.success("Course has already been selected.");
      }
    }
    else{
      toast("Credit limit has been reached.");
    }
  }

  return (
    <>
    <div>
      <Toaster />
    </div>
      <h1 className='text-center text-2xl font-bold py-12'>Course Registration</h1>
      <div className='flex lg:flex-row md:flex-row flex-col gap-6 w-11/12 mx-auto'>
        <Cards handleSelect={handleSelect}></Cards>
        <div className='lg:w-1/4 md:w-1/2 w-full relative'>
          <Cart selected={selected} totalCredit={totalCredit} totalprice={totalprice}></Cart>
        </div>
      </div>
    </>
  )
}

export default App
