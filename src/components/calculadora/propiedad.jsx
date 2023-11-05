export default function Propiedad ({datos, setPropiedad}){
    const handlerChange = (e) => {
        setPropiedad(e.target.value)
    }
    return (
        <div>
            <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
        <select id="propiedad" onChange={handlerChange}>
            <option selected disabled>...</option>
            {datos.map((item, i) => (
                <option key={i} value={item.tipo}>{item.tipo}</option>
            ))}
        </select>
        </div>
    )
}