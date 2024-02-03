import { useState } from 'react';
import './converter.css'
import Units from './Units';
import Input from './Input';
import Result from './Result';

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
            <Input onChange={getInput} value={inputValue}/>
            <div className='line2'>
                <div className="units">
                    <span>
                        <label htmlFor="From">From</label>
                        <Units onChange={changeFrom}/>
                    </span>

                    <span>
                        <label htmlFor="To">To</label>
                        <Units onChange={changeTo}/>
                    </span>
                </div>

                <button className='btn' onClick={showResult}>Convert</button>
            </div>
            <Result result={result}/>
        </section>
    )

}

export default Converter;

