import { useEffect, useState } from 'react'

import './App.css'

import EmpleadoForm from './components/EmpleadoForm'
import EmpleadoList from './components/EmpleadoList'

import {

    obtenerEmpleados,
    crearEmpleado,
    actualizarEmpleado,
    eliminarEmpleado

} from './services/empleadoService'

function App() {

    const [empleados, setEmpleados] = useState([])

    const [empleadoEditar, setEmpleadoEditar] = useState(null)

    const cargarEmpleados = async () => {

        const data = await obtenerEmpleados()

        setEmpleados(data)
    }

    useEffect(() => {

        cargarEmpleados()

    }, [])

    const agregarEmpleado = async (empleado) => {

        await crearEmpleado(empleado)

        cargarEmpleados()
    }

    const actualizarEmpleadoData = async (empleado) => {

        await actualizarEmpleado(

            empleado.idEmpleado,
            empleado
        )

        setEmpleadoEditar(null)

        cargarEmpleados()
    }

    const eliminarEmpleadoData = async (id) => {

        await eliminarEmpleado(id)

        cargarEmpleados()
    }

    return (

        <div className="container">

            <h1>Sistema de Empleados</h1>

            <EmpleadoForm

                agregarEmpleado={agregarEmpleado}

                empleadoEditar={empleadoEditar}

                actualizarEmpleado={actualizarEmpleadoData}
            />

            <EmpleadoList

                empleados={empleados}

                seleccionarEmpleado={setEmpleadoEditar}

                eliminarEmpleado={eliminarEmpleadoData}
            />

        </div>
    )
}

export default App