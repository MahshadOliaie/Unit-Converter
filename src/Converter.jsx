import './converter.css'


function Converter() {

    return (
        <section className='container'>
            <div className='amount'>
                <label htmlFor="amount">Amount</label>
                <input type="number" id='amount' placeholder='enter number' autoFocus />
            </div>
            <div className='line2'>
                <div className="units">
                    <span>
                        <label htmlFor="From">From</label>
                        <select name="From" id="From">
                            <option value="Meter">Meter</option>
                            <option value="Milimeter">Milimeter</option>
                            <option value="Centimeter">Centimeter</option>
                            <option value="Kilometer">Kilometer</option>
                        </select>
                    </span>

                    <span>
                        <label htmlFor="To">To</label>
                        <select name="To" id="To">
                            <option value="Meter">Meter</option>
                            <option value="Milimeter">Milimeter</option>
                            <option value="Centimeter">Centimeter</option>
                            <option value="Kilometer">Kilometer</option>
                        </select>
                    </span>
                </div>

                <button className='btn'>Convert</button>
            </div>

            <p className="res">Result is: <span className='resNum'>5</span> </p>
        </section>
    )

}

export default Converter;