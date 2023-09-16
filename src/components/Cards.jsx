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
        <div className='grid grid-cols-3 gap-6 w-3/4 bg-[#F3F3F3]'>
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