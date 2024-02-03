import './index.css'

function Result({result}) {
    return (
        <p className="res">Result is: <span className='resNum'>{result}</span> </p>
    )
}

export default Result