import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./courses.json")
    .then ((res) => res.json())
    .then ((data) => setCourses(data));
  },[])
  

  return (
    <>
      <h1 className='text-center text-2xl font-bold'>Course Registration</h1>
      <div className='grid grid-cols-4 gap-6 bg-[#F3F3F3]'>
        {
          courses.map((course) => (
            <div className='bg-white  rounded-lg p-4'>
              <img className='w-full h-40 object-cover rounded-lg' src={course.img} alt={course.name} />
              <h1 className='text-lg font-semibold py-3'>{course.name}</h1>
              <p className='text-sm text-justify text-[#1c1b1b99]'>{course.description}</p>
              <div className='flex justify-between text-[#1c1b1b99] py-2'>
                <p className='font-medium'><img className='w-8 inline' src="dollar.png" alt="logo" /> Price : {course.price}</p>
                <p className='font-medium'><img className='w-8 inline' src="Frame.png" alt="Frame" />Credit : {course.credit} hrs</p>
              </div>
              <button className='text-lg font-semibold py-2 bg-[#2F80ED] w-full rounded-lg text-white'>Select</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
