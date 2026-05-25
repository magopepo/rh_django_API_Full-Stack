function EmpleadoList({

    empleados,
    seleccionarEmpleado,
    eliminarEmpleado

}) {

    return (

        <table>

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Departamento</th>
                    <th>Sueldo</th>
                    <th>Acciones</th>

                </tr>

            </thead>

            <tbody>

                {

                    empleados.map((empleado) => (

                        <tr key={empleado.idEmpleado}>

                            <td>{empleado.idEmpleado}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.departamento}</td>
                            <td>{empleado.sueldo}</td>

                            <td>

                                <button
                                    onClick={() =>
                                        seleccionarEmpleado(empleado)
                                    }
                                >
                                    Editar
                                </button>

                                <button
                                    onClick={() =>
                                        eliminarEmpleado(
                                            empleado.idEmpleado
                                        )
                                    }
                                >
                                    Eliminar
                                </button>

                            </td>

                        </tr>
                    ))
                }

            </tbody>

        </table>
    )
}

export default EmpleadoList