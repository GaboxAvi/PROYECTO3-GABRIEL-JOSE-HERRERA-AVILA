import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Historial() {
  const [cotizaciones, setCotizaciones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cotizacionesGuardadas = JSON.parse(localStorage.getItem("cotizacion")) || [];
    setCotizaciones(cotizacionesGuardadas);
  }, []);

  const eliminarCotizacion = (index) => {
    const nuevasCotizaciones = cotizaciones.filter((_, i) => i !== index);
    setCotizaciones(nuevasCotizaciones);
    guardarCotizacionesLocalStorage(nuevasCotizaciones);
  };

  const vaciarHistorial = () => {
    setCotizaciones([]);
    guardarCotizacionesLocalStorage([]);
  };

  const guardarCotizacionesLocalStorage = (cotizaciones) => {
    localStorage.setItem("cotizacion", JSON.stringify(cotizaciones));
  };

  return (
    <div>
      <h1 className="center separador">Ver Historial 📋</h1>
      <div className=" center div-cotizador">
        <table>
        <thead>
            <tr>
              <th>Fecha de cotización</th>
              <th>Propiedad</th>
              <th>Ubicación</th>
              <th>Metros cuadrados</th>
              <th>Póliza mensual</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cotizaciones.map((cotizacion, index) => {
              const { fecha, propiedad, ubicacion, mts2, poliza } = cotizacion;

              return (
                <tr key={index}>
                  <td>{fecha}</td>
                  <td>{propiedad}</td>
                  <td>{ubicacion}</td>
                  <td>{mts2}</td>
                  <td>{poliza}</td>
                  <td>
                    <button className="eliminaritem button button-outline" onClick={() => eliminarCotizacion(index)}>❌</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="center separador">
          <button onClick={vaciarHistorial} className="button button-outline" id="botoneshistorial">Vaciar historial</button>
          <span style={{ margin: "0 10px" }} />
          <button onClick={() => navigate(-1)} className="button button-outline" id="botoneshistorial">Volver</button>
        </div>
      </div>
    </div>
  );
}
