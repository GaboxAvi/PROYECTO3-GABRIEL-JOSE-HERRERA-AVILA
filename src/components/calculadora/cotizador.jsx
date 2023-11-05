import { useState } from "react";


export default function Cotizador({
    propiedad, ubicacion, metros2,
    propiedadDato, ubicacionDato, 
    costoM2, setResultadoPoliza, resultadoPoliza}) {

    const [cotizador, setCotizador] = useState(false)


    const cotizadorOperacion = () => {
        if(propiedad !== "..." && ubicacion !== "..." && metros2 >= 20 && metros2 <= 500){
            const factorPropiedad = propiedadDato.find((item) => item.tipo === propiedad).factor;
            const factorUbicacion = ubicacionDato.find((item) => item.tipo === ubicacion).factor;
            const operacionPoliza = factorPropiedad * factorUbicacion * metros2 * costoM2;
            const resultadoPoliza = operacionPoliza.toFixed(2);
            setResultadoPoliza(resultadoPoliza);
            setCotizador(true);

            console.log(resultadoPoliza);
            }
    }

    const guardar = () => {
        if (cotizador) {
          const cotizacionGuardar = {
            fecha:
              new Date().toLocaleDateString() +
              " " +
              new Date().toLocaleTimeString(),
            propiedad: propiedad,
            ubicacion: ubicacion,
            mts2: metros2,
            poliza: resultadoPoliza,
          };
          const cotizacionesHistorial = JSON.parse(localStorage.getItem("cotizacion")) || [];
          cotizacionesHistorial.push(cotizacionGuardar);
          localStorage.setItem("cotizacion", JSON.stringify(cotizacionesHistorial));

          console.log(cotizacionGuardar);
        }
      };
    
      return (
        <>
          <div className="center separador">
            <button onClick={cotizadorOperacion}>Cotizar</button>
          </div>
          <div className="center separador">
            <p className="importe">Precio estimado: $ <span id="valorPoliza">{resultadoPoliza}</span>
              <span
                className={`guardar ${cotizador ? "" : "ocultar"}`}
                onClick={guardar}
                title="Guardar en historial">
                💾
              </span>
            </p>
          </div>
        </>
      );
    }    