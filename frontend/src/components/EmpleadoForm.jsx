import { useState, useEffect } from 'react'

function EmpleadoForm({ agregarEmpleado, empleadoEditar, actualizarEmpleado }) {

    const [empleado, setEmpleado] = useState({

        nombre: '',
        departamento: '',
        sueldo: ''
    })

    useEffect(() => {

        if (empleadoEditar) {

            setEmpleado(empleadoEditar)
        }

    }, [empleadoEditar])

    const handleChange = (e) => {

        setEmpleado({

            ...empleado,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        if (empleado.idEmpleado) {

            actualizarEmpleado(empleado)

        } else {

            agregarEmpleado(empleado)
        }

        setEmpleado({

            nombre: '',
            departamento: '',
            sueldo: ''
        })
    }

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={empleado.nombre}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="departamento"
                placeholder="Departamento"
                value={empleado.departamento}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="sueldo"
                placeholder="Sueldo"
                value={empleado.sueldo}
                onChange={handleChange}
                required
            />

            <button type="submit">

                {
                    empleado.idEmpleado
                    ? 'Actualizar'
                    : 'Guardar'
                }

            </button>

        </form>
    )
}

export default EmpleadoForm