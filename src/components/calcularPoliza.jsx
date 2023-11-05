import Propiedad from "./calculadora/propiedad";
import Ubicacion from "./calculadora/ubicacion";
import MetrosCuadrados from "./calculadora/metrosCuadrados";
import Cotizador from "./calculadora/cotizador";

import { useEffect, useState } from "react";
import axios from "axios";


export default function CalcularPoliza() {
  const [propiedad, setPropiedad] = useState("...");
  const [ubicacion, setUbicacion] = useState("...");
  const [metros2, setMetros2] = useState(20);
  const [resultadoPoliza, setResultadoPoliza] = useState("0.00");
  const costoM2 = 35.86;
  
  
  //datos para las opciones "ubicacion" y "propiedad".
  const [ubicacionDato, setUbicacionDato] = useState([]);
  const [propiedadDato, setPropiedadDato] = useState([]);




useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('/src/Components/datos.json');
      const data = response.data;
      
      const ubicacion = data.filter((item) => item.categoria === "ubicacion");
      const propiedad = data.filter((item) => item.categoria === "propiedad");

      setUbicacionDato(ubicacion);
      setPropiedadDato(propiedad);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  fetchData();
}, []);


  return (
    <div className="center div-cotizador">
      <h2 className="center separador">Completa los datos solicitados</h2>
      <Propiedad datos={propiedadDato} setPropiedad={setPropiedad} />
      <Ubicacion datos={ubicacionDato} setUbicacion={setUbicacion} />
      <MetrosCuadrados metros2={metros2} setMetros2={setMetros2} />
      <Cotizador 
        propiedad={propiedad}
        ubicacion={ubicacion}
        metros2={metros2}
        propiedadDato={propiedadDato}
        ubicacionDato={ubicacionDato}
        costoM2={costoM2}
        setResultadoPoliza={setResultadoPoliza}
        resultadoPoliza={resultadoPoliza}/>
    </div>
  );
}
