import { useState } from 'react';
import './converter.css'

const units = {
    "Meter": 1,
    "Kilometer": 0.001,
    "Centimeter": 100,
    "Milimeter": 1000
}

function Converter() {
    const [inputValue, setInputValue] = useState("")
    const [from, setFrom] = useState("Meter")
    const [to, setTo] = useState("Meter")
    const [result , setResult] = useState(0)

    function getInput() {
        let value = event.target.value;
        setInputValue(value)
    }

    function changeFrom() {
        let value = event.target.value;
        setFrom(value)
    }

    function changeTo() {
        let value = event.target.value;
        setTo(value)
    }

    function showResult() {
        setResult((inputValue / units[from]) * (units[to]))
    }

    function handleEnter(){
        if(event.key === "Enter")
        showResult()
    }

    window.addEventListener("keyup" , handleEnter)

    return (
        <section className='container'>
            <div className='amount'>
                <label htmlFor="amount">Amount</label>
                <input type="number" id='amount' placeholder='enter number' value={inputValue} autoFocus onChange={getInput} />
            </div>
            <div className='line2'>
                <div className="units">
                    <span>
                        <label htmlFor="From">From</label>
                        <select name="From" id="From" onChange={changeFrom}>
                            <option value="Meter">Meter</option>
                            <option value="Milimeter">Milimeter</option>
                            <option value="Centimeter">Centimeter</option>
                            <option value="Kilometer">Kilometer</option>
                        </select>
                    </span>

                    <span>
                        <label htmlFor="To">To</label>
                        <select name="To" id="To" onChange={changeTo}>
                            <option value="Meter">Meter</option>
                            <option value="Milimeter">Milimeter</option>
                            <option value="Centimeter">Centimeter</option>
                            <option value="Kilometer">Kilometer</option>
                        </select>
                    </span>
                </div>

                <button className='btn' onClick={showResult}>Convert</button>
            </div>

            <p className="res">Result is: <span className='resNum'>{result}</span> </p>
        </section>
    )

}

export default Converter;

