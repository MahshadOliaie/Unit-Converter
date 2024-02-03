import './index.css'

function Units({onChange}) {
    return (
        <select name="From" id="From" onChange={onChange}>
            <option value="Meter">Meter</option>
            <option value="Milimeter">Milimeter</option>
            <option value="Centimeter">Centimeter</option>
            <option value="Kilometer">Kilometer</option>
        </select>
    )
}

export default Units