
const Cart = ({selected, totalCredit}) => {


    return(
        <div className='bg-white rounded-lg p-4'>
            <h1 className="text-[#2F80ED] text-lg font-bold">Credit Hour Remaining {20-totalCredit} hr</h1>
            <hr />
            <h1 className="text-xl font-bold">Course Name</h1>
            <ol className="text-[#1c1b1b99]">
                {
                    selected.map(scourse => <li key={scourse.id}>{scourse.name}</li>)
                }
            </ol>
            <hr />
            <h1 className="font-medium text-[#1c1b1bcc]">Total Credit Hour : {totalCredit}</h1>
            <hr />
            <h1 className="font-semibold text-[#1c1b1bcc]">Total Price : 48000 USD</h1>
          </div>
    )
}

export default Cart;