fetch('http://127.0.0.1:5500/pasajeros.json')
    .then((response) => response.json())
    .then((pasajeros) => {
        const nombresPasajeros =
            pasajeros.map((pasajero) =>
                pasajero.nombre);
        console.log(nombresPasajeros);
    });