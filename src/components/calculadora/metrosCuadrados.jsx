export default function MetrosCuadrados (){
    return (
        <div>
            <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
        <input type="number" id="metros2" value="20" min="20" max="500" required/>
        <div className="center separador">
            <button className="button button-outline">Cotizar</button>
        </div>
        </div>
    )
}