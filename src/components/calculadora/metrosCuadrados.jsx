export default function MetrosCuadrados ({metros2, setMetros2}){
    return (
        <div>
            <label htmlFor="metros2">Ingrese los metros cuadrados:</label>
            <input type="number" id="metros2" value={metros2} min="20" max="500" onChange={(e) => setMetros2(e.target.value)} required/>
        </div>
    )
}