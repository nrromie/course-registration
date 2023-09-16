const Card = ({course, handleSelect}) => {
    const {id, img, name, description, price, credit} = course;

    return(
        <div className='bg-white  rounded-lg p-4'>
                <img className='w-full h-40 object-cover rounded-lg' src={img} alt={name} />
                <h1 className='text-lg font-semibold py-3'>{name}</h1>
                <div className='h-[40px] overflow-hidden'>
                  <p className='text-sm text-justify text-[#1c1b1b99]'>{description}</p>
                </div>
                <div className='flex justify-between text-[#1c1b1b99] py-2'>
                  <p className='font-medium'><img className='w-6 inline' src="dollar.png" alt="logo" /> Price : {price}</p>
                  <p className='font-medium'><img className='w-6 inline' src="Frame.png" alt="Frame" />Credit : {credit}hrs</p>
                </div>
                <button onClick={()=>handleSelect(course)} className='text-lg font-semibold py-2 bg-[#2F80ED] w-full rounded-lg text-white hover:bg-[#2c5080]'>Select</button>
              </div>
    )
}

export default Card;