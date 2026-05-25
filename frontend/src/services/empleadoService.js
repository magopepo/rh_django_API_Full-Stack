const API_URL = 'http://localhost:8080/api/empleados/'

export const obtenerEmpleados = async () => {

    const response = await fetch(API_URL)

    return await response.json()
}

export const crearEmpleado = async (empleado) => {

    const response = await fetch(API_URL, {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(empleado)
    })

    return await response.json()
}

export const actualizarEmpleado = async (id, empleado) => {

    const response = await fetch(`${API_URL}${id}/`, {

        method: 'PUT',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(empleado)
    })

    return await response.json()
}

export const eliminarEmpleado = async (id) => {

    await fetch(`${API_URL}${id}/`, {

        method: 'DELETE'
    })
}