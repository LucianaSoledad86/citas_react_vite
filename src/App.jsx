//De aquí salen los datos a los demás componentes

import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Form from "./components/Form";
import PatientList from "./components/PatientList";

function App() {

  const storageInicial = JSON.parse(localStorage.getItem("pacientes")) ?? [];
  const [pacientes, setPacientes] = useState(storageInicial);
  const [paciente, setPaciente] = useState({});

  //?? SI NO HAY NADA AGRGALE ALGO..

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    //.filter() no cambia el arreglo original sino que retorna uno nuevo
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );

    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-28">
      <Header />

      <div className="mt-12 md:flex">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <PatientList
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App
