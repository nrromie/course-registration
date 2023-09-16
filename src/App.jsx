
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <h1 className='text-center text-2xl font-bold py-12'>Course Registration</h1>
      <div className='flex gap-6 w-11/12 mx-auto'>
        <Cards></Cards>
        <div className='w-1/4'>
          <Cart></Cart>
        </div>
      </div>
    </>
  )
}

export default App
