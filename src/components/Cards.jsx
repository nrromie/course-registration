import { useEffect, useState } from 'react';
import Card from './Card';

const Cards = ({handleSelect}) => {
    const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./courses.json")
    .then ((res) => res.json())
    .then ((data) => setCourses(data));
  },[])

  return(
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 lg:w-3/4 md:w-1/2 w-full bg-[#F3F3F3]'>
          {
            courses.map(course => <Card
              key={course.id}
              course={course}
              handleSelect={handleSelect}
          ></Card>
            )
          }
        </div>
  )
}

export default Cards;