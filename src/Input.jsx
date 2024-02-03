import "./index.css"

function Input({onChange , value}){
    return(
        <div className='amount'>
                <label htmlFor="amount">Amount</label>
                <input type="number" id='amount' placeholder='enter number' value={value} autoFocus onChange={onChange} />
            </div>
    )
}

export default Input