import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";
import Swal from "sweetalert";


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
            const resultadoPoliza = `$${operacionPoliza.toFixed(2)}`;
            setResultadoPoliza(resultadoPoliza);
            setCotizador(true);

            console.log(resultadoPoliza);

            swal({
              title: "Cotización realizada con éxito.",
              icon: "success",
              buttons: false,
              timer: 2000,
            });

            } else {
              Swal({
                title: "Debes completar todos los datos.",
                icon: "error",
                buttons: false,
                timer: 2500,
              });
            }
    }

    const guardarCotizacion = () => {
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

          toast('¡La cotizacion ha sido guardada!', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: false,
            theme: "light",
            })
          }
      };
    
      return (
        <>
          <div className="center separador">
            <button onClick={cotizadorOperacion}>Cotizar</button>
          </div>
          <div className="center separador">
            <p className="importe">Precio estimado: $ <span id="valorPoliza">{resultadoPoliza}</span></p>
            <button
                className={`${cotizador ? "" : "ocultar"} button button-outline`}
                onClick={guardarCotizacion}
                title="Guardar en historial">
                Guardar en historial
              </button>
              <ToastContainer/>
          </div>
        </>
      );
    }    