
const Cart = ({selected, totalCredit, totalprice}) => {


    return(
        <div className='bg-white rounded-lg px-4 py-2 md:sticky top-0'>
            <h1 className="text-[#2F80ED] text-lg font-bold py-2">Credit Hour Remaining {20-totalCredit} hr</h1>
            <hr />
            <h1 className="text-xl font-bold py-2">Course Name</h1>
            <ol className="text-[#1c1b1b99] py-2">
                {
                    selected.map(scourse => <li key={scourse.id}>{scourse.name}</li>)
                }
            </ol>
            <hr />
            <h1 className="font-medium py-2 text-[#1c1b1bcc]">Total Credit Hour : {totalCredit}</h1>
            <hr />
            <h1 className="font-semibold py-2 text-[#1c1b1bcc]">Total Price : {totalprice.toFixed(2)} USD</h1>
          </div>
    )
}

export default Cart;