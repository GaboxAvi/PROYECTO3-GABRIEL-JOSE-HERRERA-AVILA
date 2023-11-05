export default function Ubicacion ({datos, setUbicacion}){
    const handlerChange = (e) => {
        setUbicacion(e.target.value);
    }


    return (
        <div>
            <label htmlFor="ubicacion">Selecciona su ubicación</label>
        <select id="ubicacion" onChange={handlerChange}>
            <option selected disabled>...</option>
            {datos.map((item, index) => (
          <option key={index} value={item.tipo}>{item.tipo}</option>
        ))}
        </select>
        </div>
    )
}