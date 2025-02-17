function MyFetchPut() {
    let usuario = {
        name: "Aitana",
        age: 26 // Cambiamos la edad para simular una actualización
    };

    fetch('https://reqres.in/api/users/2', { // Especificamos un recurso para actualizar
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(console.log)
    .catch(error => {
        console.log('Error en la petición API PUT');
        console.log(error);
    });

    return (
        <>
            <div>
                <h1>Programa para FETCH APIs PUT</h1>
            </div>
        </>
    );
}

export default MyFetchPut;
